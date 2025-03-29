import {
  BaseRequestBody,
  BaseWorkflow,
  CreditCalculator,
  Message,
  prompt,
  Usage,
} from "@/utils";
import chalk_system from "./prompts/chalk/system";
import chalk_user from "./prompts/chalk/user";
import { search } from "@/utils/providers/dify";
import { openai } from "@/utils/providers";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import chalkSchema from "./schemas/chalk-schema";
const provider = openai();
const model = "gpt-4o";

type Position = number[]; // A array composed of node index relative to the target node, for example, [0,1] means the second node in the root node.
type Result = {
  status: "success" | "error";
  message?: string;
  document?: string;
};
type AddNodeOperation = {
  type: "add-node";
  target: Position;
  content: string; // sciux code content
};

type SetPropOperation = {
  type: "set-prop";
  target: Position;
  prop: string; // should be with prefixs when needed, for example, `@click`, `#animate`, `:x`
  value: string;
};
type SetContentOperation = {
  type: "set-content"; // The content under target node will be replaced by the new content.
  target: Position;
  content: string; // sciux code content
};
type RemovePropOperation = {
  type: "remove-prop";
  target: Position;
  prop: string; // should be with prefixs when needed, for example, `@click`, `#animate`, `:x`
};
type RemoveNodeOperation = {
  type: "remove-node";
  target: Position; // The target node is the node to be removed.
};
type RemoveAllChildrenOperation = {
  type: "remove-all-children";
  target: Position; // The target node is the node to be removed.
};
type Operation =
  | AddNodeOperation
  | SetPropOperation
  | SetContentOperation
  | RemovePropOperation
  | RemoveNodeOperation
  | RemoveAllChildrenOperation;

export interface ChalkWorkflowOptions {
  requirement: string;
  components?: Position[];
  result?: Result;
  tool_call_id?: string;
}

export interface ChalkWorkflowResult {
  usage: Usage;
  operations: Operation[];
}

export async function startChalkWorkflow(
  context: ChatCompletionMessageParam[],
  options: ChalkWorkflowOptions,
) {
  const { requirement, components, result, tool_call_id } = options;

  if (context.length === 0) {
    context.push({
      role: "system",
      content: chalk_system,
    });
  } else if (result) {
    context.push({
      role: 'tool',
      content: JSON.stringify(result),
      tool_call_id: tool_call_id!,
    })
  }

  // RAG
  const chunks = await search(requirement);
  const userMessage = prompt(chalk_user, {
    requirements: requirement,
    references: chunks.join("\n"),
  });
  context.push({
    role: "user",
    content: userMessage
  });

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

  return {
    usage: {
      prompt: usage?.prompt_tokens ?? 0,
      answer: usage?.completion_tokens ?? 0,
      total: usage?.total_tokens ?? 0,
    },
    content: choices[0].message.content ?? null,
    operation: choices[0].message.tool_calls?.[0]?.function.arguments ?? null,
    tool_call_id: choices[0].message.tool_calls?.[0]?.id ?? null,
  };
}
