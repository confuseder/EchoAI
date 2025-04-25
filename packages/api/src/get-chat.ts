import { API_URL } from "@echoai/utils";
import { ChatCompletionMessageParam } from "openai/resources.mjs";
export interface GetChatRequestBody {
  chat_id: string
}

export interface DesignerStep {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
}

export interface StepBranch {
  steps: DesignerStep[]
  start?: string
  end?: string
}


export type Message = ChatCompletionMessageParam
export type Context = Message[]
export interface DisplayedMessage {
  role: 'user' | 'speaker' | 'processor'
  content: string
  step?: string
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
  context: DisplayedMessage[]
}

export default async function fetchGetChat(body: GetChatRequestBody, token?: string): Promise<GetChatResponse> {

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}/chat/get`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  const data = await response.json()

  return data as GetChatResponse
}