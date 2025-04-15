import { DesignerStep, startDesignerWorkflow, StepBranch } from "@/workflow/designer";
import supabase from "./lib/supabase";
import { ChatCompletionMessageParam } from "openai/resources.mjs";
import { DisplayedMessage } from "./get-chat";

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

export async function designer(body: DesignerRequestBody, headers: Headers): Promise<Response> {
  const token = headers.get("Authorization")?.split(" ")[1];
  if (!token && process.env.UNAUTHORIZED_MODE !== "true") {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId =
    process.env.UNAUTHORIZED_MODE === "true"
      ? process.env.UNAUTHORIZED_MODE_USER_ID
      : (await supabase.auth.getUser(token)).data.user?.id;
      
  const designerContext = await supabase
    .from('chats')
    .select('uid, id, designer_context, displayed_messages, branches')
    .eq('uid', userId)
    .eq('id', body.chat_id)
    .single();
    
  if (designerContext.error) {
    console.log(designerContext.error)
    return new Response("Internal Server Error", { status: 500 });
  }
  const context = JSON.parse(designerContext.data.designer_context) as ChatCompletionMessageParam[];

  const steps = await startDesignerWorkflow(context, {
    prompt: body.prompt,
    refs: body.refs,
    step: body.step,
    model: body.model,
  });

  const { data: updatedChat, error: updateError } = await supabase
    .from('chats')
    .update({
      designer_context: JSON.stringify(context),
      displayed_messages: JSON.stringify([
        ...JSON.parse(designerContext.data.displayed_messages),
        ...(body.prompt ? [{
          role: 'user',
          content: body.prompt,
        }] : []),
        {
          role: 'processor',
          content: 'Designer',
        }
      ]),
      branches: JSON.stringify([
        ...JSON.parse(designerContext.data.branches),
        {
          steps,
          start: body.step,
          end: body.next_step,
        }
      ]),
    })
    .eq('id', body.chat_id)
    .select('displayed_messages, branches, id')
    .single();

  if (updateError) {
    return new Response("Internal Server Error", { status: 500 });
  }

  return new Response(JSON.stringify({
    steps,
    branches: JSON.parse(updatedChat?.branches),
    displayed_messages: JSON.parse(updatedChat?.displayed_messages),
  }), { status: 200 });
}

