import { WorkflowError } from "./auth";
import type { BaseRequestBody, Message } from "./types";
import type { CreditCalculator } from "./credit";

export abstract class BaseWorkflow {
  context: Message[] = []

  constructor(context: Message[]) {
    this.context = context
  }

  setContext(context: Message[]) {
    this.context.length = 0
    this.context.push(...context)
  }

  abstract request(body: BaseRequestBody): Promise<WorkflowError | any>
  abstract calculator(prompt: number, answer: number, total: number): number
}
