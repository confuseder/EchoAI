import { prompt } from "@/utils"
import { SYSTEM, USER } from "./prompts"
import { DEFAULT_PROVIDER, DEFAULT_LAYOUT_MODEL } from "@/config/client"
import { ChatCompletionMessageParam } from "openai/resources.mjs"

const provider = DEFAULT_PROVIDER
const defaultModel = DEFAULT_LAYOUT_MODEL

export interface LayoutWorkflowOptions {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  model?: string
}

export async function startLayoutWorkflow(
  context: ChatCompletionMessageParam[],
  options: LayoutWorkflowOptions) {
  const { step, problem, knowledge, explanation, conclusion, model: modelOption } = options
  const model = modelOption ?? defaultModel

  if (context.length === 0) {
    context.push(
      {
        role: 'system',
        content: prompt(SYSTEM),
      }
    )
  }
  context.push({
    role: 'user',
    content: prompt(USER, { step, problem, knowledge, explanation, conclusion }),
  })

  const response = await provider.chat.completions.create({
    model,
    messages: context
  })

  context.push(response.choices[0].message)

  return response.choices[0].message.content
}