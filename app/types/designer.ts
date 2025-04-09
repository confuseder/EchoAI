export interface DesignerStep {
  id: number
  type: string
  content: string
  timestamp: string
}

export interface DesignerResponse {
  chat_id: string
  input: string
  steps: DesignerStep[]
}
