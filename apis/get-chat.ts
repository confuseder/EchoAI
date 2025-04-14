import { GetChatRequestBody, GetChatResponse } from "@/services/get-chat";
import { API_BASE_URL } from "@/config/app";
import supabase from "@/services/lib/supabase";

export default async function fetchGetChat(body: GetChatRequestBody): Promise<GetChatResponse> {
  const session = await supabase.auth.getSession()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (session.data.session) {
    headers.Authorization = `Bearer ${session.data.session.access_token}`
  }

  const response = await fetch(`${API_BASE_URL}/get`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  console.log(response.status)

  const data = await response.json()
  console.log(data)

  return data as GetChatResponse
}