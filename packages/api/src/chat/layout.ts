import { API_URL } from "../env";

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