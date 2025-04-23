import {
  prompt,
} from "@echoai/utils";
import { SYSTEM, USER } from "./prompts";
import { chalk, CHALK_MODEL, search, client, embedding } from "@echoai/utils";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { Position, Operation } from "./types";

const provider = chalk()
const defaultModel = CHALK_MODEL

export interface ChalkWorkflowOptions {
  prompt: string;
  components?: Position[];
  document?: string;
  model?: string;
}

export interface ChalkWorkflowResult {
  content: string | null;
  operations: Operation[];
}

export async function startChalkWorkflow(
  context: ChatCompletionMessageParam[],
  options: ChalkWorkflowOptions,
) /* : Promise<ChalkWorkflowResult> */ {
  const { prompt: userPrompt, components, model: modelOption, document } = options;
  const model = modelOption ?? defaultModel

  const searchArgs: Parameters<typeof search> = [
    embedding(),
    client,
    {
      query: userPrompt,
      topK: 10
    }
  ]

  const references = await search(...searchArgs)

  if (context.length === 0) {
    context.push({
      role: 'system',
      content: prompt(SYSTEM, {
        primary_document: document ?? '',
      })
    })
  }
  context.push({
    role: 'user',
    content: prompt(USER, {
      requirement: userPrompt,
      references: references.join('\n')
    }),
  })

  const res = await provider.chat.completions.create({
    model,
    messages: context,
    stream: false
  })

  context.push(res.choices[0].message)
  const content = res.choices[0].message.content

  return {
    content,
    operations: []
  }
}

export * from './prompts'
