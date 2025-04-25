import {
  API_COLLECTION_NAME,
  KNOWLEDGE_COLLECTION_NAME,
  prompt,
} from "@echoai/utils";
import { SYSTEM, USER } from "./prompts";
import { chalk, CHALK_MODEL, search, client, embedding } from "@echoai/utils";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { Position, Operation } from "./types";
import { OperationNode, parse } from "./parse";

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
  callback?: (operations: OperationNode[]) => any
) /* : Promise<ChalkWorkflowResult> */ {
  const { prompt: userPrompt, components, model: modelOption, document, stream } = options;
  const model = modelOption ?? defaultModel

  const referencePromise = new Promise<string[]>((resolve, reject) => {
    search(embedding(), client, {
      collection: API_COLLECTION_NAME,
      query: userPrompt,
      topK: 30,
    }).then(resolve).catch(reject)
  })
  const knowledgePromise = new Promise<string[]>((resolve, reject) => {
    search(embedding(), client, {
      collection: KNOWLEDGE_COLLECTION_NAME,
      query: userPrompt,
      topK: 3
    }).then(resolve).catch(reject)
  })

  const [references, knowledge] = await Promise.all([referencePromise, knowledgePromise])

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
      references: [...references, ...knowledge].join('\n')
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
              console.log('operations', operations)
              controller.enqueue(JSON.stringify({
                operations
              }))
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
        callback?.(parse(content))
        controller.close();
      }
    }
  })
}

export * from './prompts'
export * from './types'
