import { API_BASE_URL } from "@/packages/web/config/app";
import { LayoutRequestBody, LayoutResponse } from "@/services/layout";
import supabase from "@/services/lib/supabase";

export async function layout(body: LayoutRequestBody): Promise<LayoutResponse> {
  const session = await supabase.auth.getSession()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (session.data.session) {
    headers.Authorization = `Bearer ${session.data.session.access_token}`
  }

  const response = await fetch(`${API_BASE_URL}/layout`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  return response.json()
}