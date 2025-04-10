import {
  prompt,
} from "@/utils";
import chalk_system from "./prompts/system";
import chalk_user from "./prompts/user";
import { search } from "@/utils/providers/dify";
import { openai } from "@/utils/providers";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import chalkSchema from "./schemas/schema";
import { Position, Result, Operation } from "./types";
const provider = openai();
const model = "gpt-4o";

export interface ChalkWorkflowOptions {
  prompt: string;
  components?: Position[];
  result?: Result;
  tool_call_id?: string;
  primary_document?: string;
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
  const { prompt: userPrompt, components, result, tool_call_id, primary_document } = options;

  if (context.length === 0) {
    context.push({
      role: "system",
      content: prompt(chalk_system, {
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
  const userMessage = prompt(chalk_user, {
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
