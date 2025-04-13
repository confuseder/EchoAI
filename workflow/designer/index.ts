import { ChatCompletionMessageParam } from "openai/resources/chat/completions"
import { SYSTEM, USER, SYSTEM_ADDITION, ADDITION } from "./prompts"
import { prompt } from "@/utils";
import { DEFAULT_DESIGNER_MODEL, DEFAULT_PROVIDER } from "@/config";
import { DesignerStep } from "./types";

const provider = DEFAULT_PROVIDER
const defaultModel = DEFAULT_DESIGNER_MODEL

export interface DesignerWorkflowOptions {
  prompt: string
  refs?: string
  step?: string
  model?: string
}

export async function startDesignerWorkflow(
  context: ChatCompletionMessageParam[],
  options: DesignerWorkflowOptions,
) {
  const { prompt: userPrompt, refs, step, model: modelOption } = options;
  const model = modelOption ?? defaultModel

  // Workflow Start
  if (context.length === 0) {
    context.push(
      {
        role: 'system',
        content: prompt(SYSTEM) + (refs ? prompt(SYSTEM_ADDITION, { refs: refs! }) : ''),
      },
      {
        role: 'user',
        content: prompt(USER, { prompt: userPrompt }),
      }
    )
  } else if (userPrompt) {
    context.push({
      role: 'user',
      content: prompt(ADDITION, { step: step!, prompt: userPrompt }),
    })
  }
  const response = await provider.chat.completions.create({
    model,
    messages: context,
  })

  context.push(response.choices[0].message)

  const { content } = response.choices[0].message
  return JSON.parse(content?.match(/```json\n([\s\S]*)\n```/)?.[1] ?? '') as DesignerStep[]
}

export * from './types'
