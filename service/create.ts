import supabase from './supabase'
import { BASE_URL } from './config'

export default async function createChat(primary_prompt?: string) {
  const session = await supabase.auth.getSession()
  if (!session.data.session) {
    throw new Error('No session found')
  }

  const response = await fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${session.data.session.access_token}`
    },
    body: JSON.stringify({
      primary_prompt
    })
  })

  return response.json() as Promise<{
    chat_id: string
  }>
}
