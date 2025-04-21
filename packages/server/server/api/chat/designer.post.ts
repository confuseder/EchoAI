import { eq, and } from "drizzle-orm";
import { table as chats } from "../../../db/chats";
import db from "../../../db";
import { DesignerStep, startDesignerWorkflow, StepBranch } from "@echoai/workflow/designer";
import { ChatCompletionMessageParam } from "openai/resources.mjs";
import logto from "../../utils/logto";
import { UNAUTHORIZED_MODE, UNAUTHORIZED_MODE_USER_ID } from "@echoai/utils";
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

  const userId = UNAUTHORIZED_MODE === "true"
    ? UNAUTHORIZED_MODE_USER_ID
    : (await logto.getAccessTokenClaims(token))?.sub;

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
        {
          steps,
          start: body.step,
          end: body.next_step,
        }
      ],
    } as any;

    const [updatedChat] = await db
      .update(chats)
      .set(updateValues)
      .where(eq(chats.id, body.chat_id))
      .returning({
        context: chats.context,
        branches: chats.branches,
        id: chats.id
      });

    if (!updatedChat) {
      throw createError({
        statusCode: 500,
        message: "Failed to update chat"
      });
    }

    return {
      steps,
      branches: updatedChat.branches as StepBranch[],
      displayed_messages: updatedChat.context as DisplayedMessage[],
    };
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      message: `Internal Server Error: ${error.message}`
    });
  }
});
