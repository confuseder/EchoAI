export type CreditCalculator = (
  prompt: number,
  answer: number,
  total: number,
) => number

export function defineCreditCalculator(calculator: CreditCalculator) {
  return calculator
}


