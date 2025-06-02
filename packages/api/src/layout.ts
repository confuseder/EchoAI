import { PageSwitch } from "@echoai/shared";
import { API_URL } from "@echoai/utils";

export interface LayoutRequestBody {
  chat_id: string
  prompt: string
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  interaction: string
  page_id_will_be_used: string
}

export interface LayoutResponse {
  chat_id: string
  prompt: string
  content: string
  operation?: PageSwitch
}

export default async function fetchLayout(body: LayoutRequestBody, token?: string): Promise<LayoutResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_URL}/chat/layout`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  return response.json()
}