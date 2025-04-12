import { prompt } from "@/utils"
import { SYSTEM, USER } from "./prompts"
import { DEFAULT_PROVIDER, DEFAULT_SPEAKER_MODEL } from "@/config"
import { ChatCompletionMessageParam } from "openai/resources.mjs"

const provider = DEFAULT_PROVIDER
const defaultModel = DEFAULT_SPEAKER_MODEL

export interface SpeakerWorkflowOptions {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  prompt?: string
  model?: string
}

export async function startSpeakerWorkflow(
  context: ChatCompletionMessageParam[],
  options: SpeakerWorkflowOptions,
) {
  const { step, problem, knowledge, explanation, conclusion, prompt: userPrompt, model: modelOption } = options
  const model = modelOption ?? defaultModel

  if (context.length === 0) {
    context.push(
      { role: 'system', content: prompt(SYSTEM) },
    )
  }
  context.push({
    role: 'user',
    content: prompt(USER, { step, problem, knowledge, explanation, conclusion, prompt: userPrompt ?? 'NEXT' }),
  })

  const response = await provider.chat.completions.create({
    model,
    messages: context
  })

  context.push(response.choices[0].message)

  return response.choices[0].message.content
}