import { eq, and } from "drizzle-orm";
import { table as chats } from "../../../db/chats";
import db from "../../../db";
import { DesignerStep, startDesignerWorkflow, StepBranch } from "@echoai/workflow/designer";
import { ChatCompletionMessageParam } from "openai/resources.mjs";
import logto from "../../utils/logto";
import { UNAUTHORIZED_MODE, UNAUTHORIZED_MODE_USER_ID } from "@echoai/utils";
import { getVerifiedLogtoUser } from "../../utils/jwt";

export interface DisplayedMessage {
  role: 'user' | 'speaker' | 'processor'
  content: string
}

export interface DesignerRequestBody {
  chat_id: string;
  prompt: string
  refs?: string
  step?: string
  next_step?: string
  model?: string
}

export interface DesignerResponse {
  steps: DesignerStep[]
  branches: StepBranch[]
  displayed_messages: DisplayedMessage[]
}

export default defineEventHandler(async (event) => {
  const body = await readBody<DesignerRequestBody>(event);
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

  try {
    const [designerContext] = await db
      .select({
        uid: chats.uid,
        id: chats.id,
        designer_context: chats.designer_context,
        branches: chats.branches,
        context: chats.context
      })
      .from(chats)
      .where(and(
        eq(chats.uid, userId),
        eq(chats.id, body.chat_id)
      ));

    if (!designerContext) {
      throw createError({
        statusCode: 404,
        message: "Chat not found"
      });
    }

    const context = designerContext.designer_context as ChatCompletionMessageParam[];

    const steps = await startDesignerWorkflow(context, {
      prompt: body.prompt,
      refs: body.refs,
      step: body.step,
      model: body.model,
    });

    const latestBranch = {
      steps,
      start: body.step,
      end: body.next_step,
    }
    const updateValues = {
      designer_context: context,
      context: [
        ...(designerContext.context as any[]),
        ...(body.prompt ? [{
          role: 'user' as const,
          content: body.prompt,
        }] : []),
        {
          role: 'processor' as const,
          content: 'Designer',
        }
      ],
      branches: [
        ...(designerContext.branches as StepBranch[]),
        latestBranch,
      ],
    }
    runTask('save-context', {
      payload: {
        chat_id: body.chat_id,
        values: updateValues
      }
    })

    return {
      steps,
      branches: updateValues.branches as StepBranch[],
      displayed_messages: updateValues.context as DisplayedMessage[],
    };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      message: `Internal Server Error: ${error.message}`
    });
  }
});
