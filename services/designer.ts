import { DesignerStep, startDesignerWorkflow } from "@/workflow/designer";
import supabase from "./lib/supabase";
import { ChatCompletionMessageParam } from "openai/resources.mjs";

export interface DesignerRequestBody {
  chat_id: string;
  prompt: string
  refs?: string
  step?: string
  model?: string
}

export interface DesignerResponse {
  steps: DesignerStep[]
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
    .select('uid, id, designer_context')
    .eq('uid', userId)
    .eq('id', body.chat_id)
    .single();
    
  if (designerContext.error) {
    return new Response("Internal Server Error", { status: 500 });
  }
  const context = JSON.parse(designerContext.data.designer_context) as ChatCompletionMessageParam[];

  const steps = await startDesignerWorkflow(context, {
    prompt: body.prompt,
    refs: body.refs,
    step: body.step,
    model: body.model,
  });

  return new Response(JSON.stringify({
    steps,
  }), { status: 200 });
}

