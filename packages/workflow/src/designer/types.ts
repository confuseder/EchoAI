export interface DesignerStep {
  step: string
  problem: string
  knowledge: string
  explanation: string
  conclusion: string
  interaction: string
}

export interface StepBranch {
  steps: DesignerStep[]
  start?: string
  end?: string
}
