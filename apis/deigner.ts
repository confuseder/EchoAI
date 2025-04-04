import { BASE_URL } from './config'
import supabase from './supabase'

export interface DesignerParams {
  chat_id: string
  refs: string
  prompt: string
  step: string
}

export default async function fetchDesigner(params: DesignerParams) {
  const session = await supabase.auth.getSession()
  if (!session.data.session) {
    throw new Error('No session found')
  }

  const response = await fetch(`${BASE_URL}/designer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.data.session.access_token}`
    },
    body: JSON.stringify(params)
  })

  return response.json() as Promise<{
    chat_id: string
    refs: string
    prompt: string
    step: string
  }>
}
