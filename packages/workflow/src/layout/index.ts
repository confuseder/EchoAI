import { prompt } from "@echoai/utils"
import { SYSTEM, USER } from "./prompts"
import { layout, LAYOUT_MODEL } from "@echoai/utils"
import { ChatCompletionMessageParam } from "openai/resources.mjs"

const provider = layout()
const defaultModel = LAYOUT_MODEL

export interface LayoutWorkflowOptions {
  prompt: string
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
  const { prompt: promptOption, step, problem, knowledge, explanation, conclusion, model: modelOption } = options
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
    content: prompt(USER, { step, problem, knowledge, explanation, conclusion, prompt: promptOption }),
  })

  const response = await provider.chat.completions.create({
    model,
    messages: context
  })

  context.push(response.choices[0].message)

  return response.choices[0].message.content
}

export * from './prompts'
