import {
  prompt,
} from "@echoai/utils";
import { SYSTEM, USER } from "./prompts";
import { search } from "@echoai/utils";
import { openai, DEFAULT_CHALK_MODEL } from "@echoai/utils";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import chalkSchema from "./schemas/schema";
import { Position, Result, Operation } from "./types";

const provider = openai()
const defaultModel = DEFAULT_CHALK_MODEL

export interface ChalkWorkflowOptions {
  prompt: string;
  components?: Position[];
  result?: Result;
  tool_call_id?: string;
  primary_document?: string;
  model: string;
}

export interface ChalkWorkflowResult {
  content: string | null;
  operations: Operation[];
  tool_call_id: string | null;
}

export async function startChalkWorkflow(
  context: ChatCompletionMessageParam[],
  options: ChalkWorkflowOptions,
): Promise<ChalkWorkflowResult> {
  const { prompt: userPrompt, components, model: modelOption, result, tool_call_id, primary_document } = options;
  const model = modelOption ?? defaultModel

  if (context.length === 0) {
    context.push({
      role: "system",
      content: prompt(SYSTEM, {
        primary_document: primary_document ?? '<root></root>'
      }),
    });
  } else if (result) {
    context.push({
      role: 'tool',
      content: JSON.stringify(result),
      tool_call_id: tool_call_id!,
    })
  }

  // RAG
  const chunks = await search(userPrompt);
  const userMessage = prompt(USER, {
    requirements: userPrompt,
    references: chunks.join("\n"),
  });
  context.push({
    role: "user",
    content: userMessage,
  });

  console.log(chunks)

  // LLM
  const response = await provider.chat.completions.create({
    messages: context as ChatCompletionMessageParam[],
    model,
    tools: [
      {
        type: "function",
        function: chalkSchema,
      },
    ],
  });
  const { usage, choices } = response;

  console.log(choices[0].message)

  return {
    content: choices[0].message.content ?? null,
    operations: (JSON.parse(choices[0].message.tool_calls?.[0]?.function.arguments!) ?? []) as Operation[],
    tool_call_id: choices[0].message.tool_calls?.[0]?.id ?? null,
  };
}

export * from './prompts'
