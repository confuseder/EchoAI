import {
  prompt,
} from "@echoai/utils";
import { SYSTEM, USER } from "./prompts";
import { chalk, CHALK_MODEL, search, client, embedding } from "@echoai/utils";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { Position, Operation } from "./types";
import { parse } from "./parse";

const provider = chalk()
const defaultModel = CHALK_MODEL

export interface ChalkWorkflowOptions {
  prompt: string;
  components?: Position[];
  document?: string;
  model?: string;
  stream?: boolean;
}

export interface ChalkWorkflowResult {
  content: string | null;
  operations: Operation[];
}

export async function startChalkWorkflow(
  context: ChatCompletionMessageParam[],
  options: ChalkWorkflowOptions,
) /* : Promise<ChalkWorkflowResult> */ {
  const { prompt: userPrompt, components, model: modelOption, document, stream } = options;
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
    stream: stream ?? false
  })

  if (!stream) {
    context.push((res as any).choices[0].message)
    const content = (res as any).choices[0].message.content

    return {
      content,
      operations: []
    }
  }

  let content = ''
  let latestOperationAmount = 0

  return new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of res as any) {
          if (chunk.choices && chunk.choices[0]?.delta?.content) {
            content += chunk.choices[0].delta.content
            const operations = parse(content)
            if (operations.length > latestOperationAmount) {
              latestOperationAmount = operations.length
              controller.enqueue(JSON.stringify(operations))
            }
          }
        }
      } catch (error) {
        console.error('Error in stream processing:', error);
        controller.error(error);
      } finally {
        context.push({
          role: 'assistant',
          content,
        })
        controller.close();
      }
    }
  })
}

export * from './prompts'
