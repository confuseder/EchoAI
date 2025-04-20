import { DesignerStep, StepBranch } from "@echoai/workflow/designer";
import { API_URL } from "@echoai/utils";
import { DisplayedMessage } from "./get-chat";

export interface DesignerRequestBody {
  chat_id: string;
  prompt: string
  refs?: string
  step?: string
  next_step?: string
  model?: string
}

export interface DesignerResponse {
  steps: DesignerStep[]
  branches: StepBranch[]
  displayed_messages: DisplayedMessage[]
}

export default async function fetchDesigner(body: DesignerRequestBody, token?: string): Promise<DesignerResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  
  const response = await fetch(`${API_URL}/designer`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })

  return await response.json() as DesignerResponse
}
