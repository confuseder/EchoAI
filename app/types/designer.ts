export interface DesignerStep {
  id: string
  type: string
  content: string
  timestamp: string
  step: number
  title: string
  description: string
  children?: DesignerStep[]
}

export interface DesignerResponse {
  chat_id: string
  input: string
  steps: DesignerStep[]
}
