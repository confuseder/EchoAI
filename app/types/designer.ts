export interface DesignerStep {
  id: number
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
