import { API_BASE_URL } from '@/packages/web/config/app'
import supabase from '@/services/lib/supabase'
import { CreateRequestBody, CreateResponse } from '@/services/create'

export default async function createChat(body: CreateRequestBody): Promise<CreateResponse> {
  const session = await supabase.auth.getSession()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  }
  
  if (session.data.session) {
    headers.Authorization = `Bearer ${session.data.session.access_token}`
  }

  const response = await fetch(`${API_BASE_URL}/create`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      prompt: body.prompt
    })
  })

  return await response.json() as CreateResponse
}
