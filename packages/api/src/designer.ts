import { DesignerRequestBody, DesignerResponse } from "@/services/designer";
import { API_BASE_URL } from "@/packages/web/config/app";
import supabase from "@/services/lib/supabase";

export default async function fetchDesigner(body: DesignerRequestBody): Promise<DesignerResponse> {
  const session = await supabase.auth.getSession()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (session.data.session) {
    headers.Authorization = `Bearer ${session.data.session.access_token}`
  }
  
  const response = await fetch(`${API_BASE_URL}/designer`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  return await response.json() as DesignerResponse
}
