import { createClient } from "@supabase/supabase-js";
import system from "./prompts/system";
import { prompt } from "@/utils";
import system_addition from "./prompts/system-addition";
import addition from "./prompts/addition";
import { deepseek } from "@/utils/providers";

const runtime = "edge"

const model = "deepseek-chat"

interface RequestBody {
  prompt?: string
  chat_id: string
  refs: string
  step: string
}

export async function GET(request: Request) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const client = deepseek()

  // Get user id
  const userId = await supabase.auth.getUser(token)

  // check credits
  const { data, error } = await supabase
    .from('users')
    .select('uid, credits')
    .eq('uid', userId.data.user?.id)
    .single()
  if (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
  if (data.credits <= 0) {
    return new Response("Insufficient credits", { status: 402 });
  }

  // Workflow Prepare
  const { chat_id, prompt: userPrompt, refs, step } = (await request.json()) as RequestBody
  let context = []
  let results = []
  if (!chat_id) {
    await supabase
      .from('chats')
      .insert({
        uid: userId.data.user?.id,
      })
  } else {
    const data = await supabase
      .from('chats')
      .select('uid, chat_id, designer_context, designer_results')
      .eq('chat_id', chat_id)
      .single()
    if (data.error) {
      return new Response("Internal Server Error", { status: 500 });
    }
    context = JSON.parse(data.data.designer_context)
    results = JSON.parse(data.data.designer_results)
  }

  // Workflow Start
  if (context.length === 0) {
    context.push({
      role: 'system',
      content: prompt(system) + prompt(system_addition, { refs })
    }, userPrompt ? {
      role: 'user',
      content: prompt(userPrompt, { prompt: userPrompt })
    } : void 0)
  } else if (userPrompt) {
    context.push({
      role: 'user',
      content: prompt(addition, { step, prompt: userPrompt })
    })
  }
  const response = await client.chat.completions.create({
    model,
    messages: context
  })

  // process data
  const { content } = response.choices[0].message
  context.push(response.choices[0].message)
  results.push({
    prompt: userPrompt,
    step,
  })
  const steps = JSON.parse(content!)

  // update credits
  await supabase
    .from('users')
    .update({ credits: data.credits - 1 })
    .eq('uid', userId.data.user?.id)

  // update context and results
  await supabase
    .from('chats')
    .update({ designer_context: JSON.stringify(context), designer_results: JSON.stringify(results) })
    .eq('chat_id', chat_id)

  return new Response(JSON.stringify({
    chat_id,
    steps,
    input: userPrompt,
  }))
}
