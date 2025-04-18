import { ChatCompletionMessageParam } from "openai/resources.mjs"
import supabase from "./lib/supabase"
import { startLayoutWorkflow } from "@/workflow/layout"

export interface LayoutRequestBody {
  chat_id: string
  prompt: string
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
}

export interface LayoutResponse {
  chat_id: string
  prompt: string
  content: string
}

export async function layout(body: LayoutRequestBody, headers: Headers): Promise<Response> {
  const token = headers.get("Authorization")?.split(" ")[1];
  if (!token && process.env.UNAUTHORIZED_MODE !== "true") {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId =
    process.env.UNAUTHORIZED_MODE === "true"
      ? process.env.UNAUTHORIZED_MODE_USER_ID
      : (await supabase.auth.getUser(token)).data.user?.id;

  const layoutContext = await supabase
    .from('chats')
    .select('uid, id, layout_context, layout_results, displayed_messages, branches')
    .eq('uid', userId)
    .eq('id', body.chat_id)
    .single();

  if (!layoutContext.data) {
    return new Response("Chat not found", { status: 404 });
  }

  const context = JSON.parse(layoutContext.data.layout_context) as ChatCompletionMessageParam[];
  
  const layoutResult = await startLayoutWorkflow(context, {
    ...body,
  });

  await supabase
    .from('chats')
    .update({
      layout_context: JSON.stringify(context),
    })
    .eq('uid', userId)
    .eq('id', body.chat_id);

  return new Response(JSON.stringify(layoutResult), { status: 200 });
}
