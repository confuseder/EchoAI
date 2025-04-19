import { DesignerStep, StepBranch } from "@/workflow/designer";
import { ChatCompletionMessageParam } from "openai/resources.mjs";
import supabase from "./lib/supabase";

export interface GetChatRequestBody {
  chat_id: string
}

export type Message = ChatCompletionMessageParam
export type Context = Message[]
export interface DisplayedMessage {
  role: 'user' | 'speaker' | 'processor'
  content: string
}
export interface DesignerResult {
  prompt: string
  refs?: string
  step?: string
  model?: string
  result: DesignerStep[]
}
export interface SpeakerResult {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  prompt?: string
  model?: string
  result: string
}
export interface LayoutResult {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  model?: string
  result: string
}
export interface ChalkResult {
  // TODO: chalk
}

export interface GetChatResponse {
  chat_id: string
  designer_context: Context
  designer_results: DesignerResult[]
  speaker_context: Context
  speaker_results: SpeakerResult[]
  layout_context: Context
  layout_results: LayoutResult[]
  chalk_context: Context
  chalk_results: ChalkResult[]
  branches: StepBranch[]
  displayed_messages: DisplayedMessage[]
}

export async function getChat(body: GetChatRequestBody, headers: Headers): Promise<Response> {
  const token = headers.get("Authorization")?.split(" ")[1];
  if (!token && process.env.UNAUTHORIZED_MODE !== "true") {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId =
    process.env.UNAUTHORIZED_MODE === "true"
      ? process.env.UNAUTHORIZED_MODE_USER_ID
      : (await supabase.auth.getUser(token)).data.user?.id;

  const { data, error } = await supabase
    .from('chats')
    .select('uid, id, designer_context, speaker_context, layout_context, chalk_context, designer_results, speaker_results, layout_results, chalk_results, branches, displayed_messages')
    .eq('uid', userId)
    .eq('id', body.chat_id)
    .single();

  if (error) {
    console.log(error)
    return new Response("Internal Server Error", { status: 500 });
  }


  console.log(data)

  const chat: GetChatResponse = {
    chat_id: data.id,
    designer_context: JSON.parse(data.designer_context),
    designer_results: JSON.parse(data.designer_results),
    speaker_context: JSON.parse(data.speaker_context),
    speaker_results: JSON.parse(data.speaker_results),
    layout_context: JSON.parse(data.layout_context),
    layout_results: JSON.parse(data.layout_results),
    chalk_context: JSON.parse(data.chalk_context),
    chalk_results: JSON.parse(data.chalk_results),
    branches: JSON.parse(data.branches),
    displayed_messages: JSON.parse(data.displayed_messages),
  }

  console.log(JSON.stringify(chat, null, 2))

  return new Response(JSON.stringify(chat), { status: 200 });
}