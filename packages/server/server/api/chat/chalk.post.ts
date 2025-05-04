import { Operation, Position, startChalkWorkflow } from "@echoai/workflow/chalk";
import { UNAUTHORIZED_MODE } from "@echoai/utils";
import { and, eq } from "drizzle-orm";
import db from "../../../db";
import { table as chats } from "../../../db/chats";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { getVerifiedLogtoUser } from "../../utils/jwt";
export interface ChalkRequestBody {
  chat_id: string;
  prompt: string;
  components?: Position[];
  document?: string;
  model?: string;
  stream?: boolean;
}

export interface ChalkResult {
  input: string;
  components: Position[];
  output: Operation[];
}

export interface ChalkResponse {
  content: string;
  operations: Operation[];
  delta?: {
    operation: Operation
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ChalkRequestBody>(event)
  const token = getRequestHeader(event, "Authorization")?.split(" ")[1];

  if (!token && UNAUTHORIZED_MODE !== "true") {
    throw createError({
      statusCode: 401,
      message: "Unauthorized"
    });
  }

  const jwt = await getVerifiedLogtoUser(token)
  if (!jwt) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized"
    });
  }

  const userId = jwt.sub

  if (!userId) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized"
    });
  }

  try {
    const [chat] = await db
      .select({
        chat_id: chats.id,
        uid: chats.uid,
        chalk_context: chats.chalk_context,
        chalk_results: chats.chalk_results,
      })
      .from(chats)
      .where(and(
        eq(chats.uid, userId),
        eq(chats.id, body.chat_id)
      ));

    if (!chat) {
      throw createError({
        statusCode: 404,
        message: "Chat not found"
      });
    }

    const context = chat.chalk_context as ChatCompletionMessageParam[];
    const results = chat.chalk_results as ChalkResult[];

    if (body.stream) {
      setResponseHeader(event, 'Content-Type', 'text/event-stream');
      setResponseHeader(event, 'Cache-Control', 'no-cache');
      setResponseHeader(event, 'Connection', 'keep-alive');

      return await startChalkWorkflow(context, {
        prompt: body.prompt,
        components: body.components,
        document: body.document,
        model: body.model,
        stream: true,
      }, (operations) => {
        results.push({
          input: body.prompt,
          components: body.components,
          output: operations as unknown as Operation[],
        })
        runTask('save-context', {
          payload: {
            chat_id: body.chat_id,
            values: {
              chalk_context: context,
              chalk_results: results,
            }
          }
        })
      });
    }

    const chalkResult = await startChalkWorkflow(context, {
      prompt: body.prompt,
      components: body.components,
      document: body.document,
      model: body.model,
    });

    return chalkResult;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Internal server error"
    });
  }
})
