export interface DesignerStep {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
}

export interface DesignerResponse {
  chat_id: string
  input: string
  steps: DesignerStep[]
}
