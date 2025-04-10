import { startChalkWorkflow } from "../workflow"

const result = await startChalkWorkflow([], {
  prompt: "三角形ABC, AB=AC, 作AD垂直于BC",
})

console.log(result.operations)