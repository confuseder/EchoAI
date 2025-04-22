import {
  prompt,
} from "@echoai/utils";
import { SYSTEM, USER } from "./prompts";
import { search } from "@echoai/utils";
import { openai, DEFAULT_CHALK_MODEL } from "@echoai/utils";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import chalkSchema from "./schemas/schema";
import { Position, Operation } from "./types";

const provider = openai()
const defaultModel = DEFAULT_CHALK_MODEL

export interface ChalkWorkflowOptions {
  prompt: string;
  components?: Position[];
  document?: string;
  model: string;
}

export interface ChalkWorkflowResult {
  content: string | null;
  operations: Operation[];
}

export async function startChalkWorkflow(
  context: ChatCompletionMessageParam[],
  options: ChalkWorkflowOptions,
) /* : Promise<ChalkWorkflowResult> */ {
  const { prompt: userPrompt, components, model: modelOption } = options;
  const model = modelOption ?? defaultModel

  
}

export * from './prompts'
