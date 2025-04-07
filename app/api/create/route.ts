import { createClient } from '@supabase/supabase-js'
import system from '../designer/prompts/system'
import userPrompt from '../designer/prompts/user'
import { prompt } from '@/utils'

const runtime = 'edge'

interface RequestBody {
  primary_prompt?: string
}

export async function GET(request: Request) {
  const body = await request.json() as RequestBody

  const token = request.headers.get('Authorization')?.split(' ')[1]
  if (!token) {
    return new Response('Unauthorized', { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const userId = await supabase.auth.getUser(token)
  const { data, error } = await supabase
    .from('chats')
    .insert({
      uid: userId.data.user?.id,
      designer_context: JSON.stringify([
        {
          role: 'system',
          content: prompt(system)
        },
        body.primary_prompt ? {
          role: 'user',
          content: prompt(userPrompt, {
            prompt: body.primary_prompt
          })
        } : void 0
      ])
    })
    .select('uid, id')
    .single()
  if (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
  
  return new Response(JSON.stringify({
    chat_id: data.id
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}