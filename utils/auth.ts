import type { SupabaseClient } from "@supabase/supabase-js"
import type { CreditCalculator } from "./credit"
import type { Contexts, Message, RealMessage, Usage } from "./types"

export const AUTHORIZATION_ERROR = Symbol('AUTHORIZATION_ERROR')
export const CHAT_NOT_FOUND = Symbol('CHAT_NOT_FOUND')
export const HISTORY_UPDATE_FAILED = Symbol('HISTORY_UPDATE_FAILED')
export const BILLING_ERROR = Symbol('BILLING_ERROR')
export const INSUFFICIENT_BALANCE = Symbol('INSUFFICIENT_BALANCE')

export type WorkflowError = typeof AUTHORIZATION_ERROR | typeof CHAT_NOT_FOUND | typeof HISTORY_UPDATE_FAILED | typeof BILLING_ERROR | typeof INSUFFICIENT_BALANCE

export async function verify(token: string, client: SupabaseClient): Promise<WorkflowError | string> {
  const { data, error } = await client
    .from('apps')
    .select('api_key, user_id, id')
    .eq('api_key', token)
    .single()
  if (error) {
    return AUTHORIZATION_ERROR
  }

  return data.user_id
}

export async function getHistory(chat_id: string, client: SupabaseClient): Promise<WorkflowError | Contexts> {
  const { data, error } = await client
    .from('chats')
    .select('chat_id, real_outputs, context')
    .eq('chat_id', chat_id)
    .single()
  if (error) {
    return CHAT_NOT_FOUND
  }

  return {
    chat_id: data.chat_id,
    real_context: data.real_outputs,
    context: data.context
  }
}

export async function vertifyBilling(user_id: string, client: SupabaseClient) {
  const { data, error } = await client
    .from('billing')
    .select('uid, balance')
    .eq('uid', user_id)
    .single()
  if (error) {
    return BILLING_ERROR
  }

  if (data.balance < 0) {
    return INSUFFICIENT_BALANCE
  }

  return data.balance
}

export async function updateBalance(info: {
  user_id: string
  balance: number
  calculator: CreditCalculator
  usage: Usage
}, client: SupabaseClient) {
  const creditUsage = info.calculator(info.usage.prompt, info.usage.answer, info.usage.total)
  const afterBalance = info.balance - creditUsage

  const { data, error } = await client
    .from('billing')
    .update({ balance: afterBalance })
    .eq('uid', info.user_id)
  if (error) {
    return BILLING_ERROR
  }

  return {
    afterBalance,
    creditUsage,
  }
}

export async function updateHistory(info: {
  contexts: Contexts,
  context: Message[],
  latestRealMessage: RealMessage,
}, client: SupabaseClient) {
  info.contexts.real_context.push(info.latestRealMessage)

  if (!info.contexts.chat_id) {
    const { data, error } = await client
      .from('chats')
      .insert({
        context: JSON.stringify(info.context),
        real_context: JSON.stringify(info.contexts.real_context),
      })
      .select('chat_id')
      .single()
    if (error) {
      return HISTORY_UPDATE_FAILED
    }

    return data.chat_id
  }

  const { data, error } = await client
    .from('chats')
    .update({
      context: JSON.stringify(info.context),
      real_context: JSON.stringify(info.contexts.real_context),
    })
    .eq('chat_id', info.contexts.chat_id)
  if (error) {
    return HISTORY_UPDATE_FAILED
  }

  return info.contexts.chat_id
}