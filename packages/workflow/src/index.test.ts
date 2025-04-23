import { ChatCompletionMessageParam } from "openai/resources.mjs"
import { startChalkWorkflow } from "./chalk"

const context: ChatCompletionMessageParam[] = []

const test = "Here's how to layout the whiteboard for this step:\n\n1. Divide the whiteboard into TWO VERTICAL COLUMNS:\n\nLeft Column (50% width) - \"Function Basics\"\n- Draw a table with 2 columns and 3 rows:\n  - Column heads: \"Function Type\" | \"General Form\"\n  - Rows:\n    - \"Linear\" | \"f(x) = mx + b\"\n    - \"Quadratic\" | \"f(x) = ax² + bx + c\"\n    - \"Cubic\" | \"f(x) = ax³ + bx² + cx + d\"\n\nRight Column (50% width) - \"Quadratic Function Example\"\n- Draw a coordinate system:\n  - Origin at center\n  - x-axis from -5 to 5\n  - y-axis from -5 to 10\n- Plot the quadratic function:\n  - f(x) = x²\n  - Domain: All real numbers\n- Highlight the parabola shape with arrows\n- At the vertex (0,0), write: \"Standard quadratic form: f(x) = ax² + bx + c\"\n- Below the graph, write key takeaways:\n  - \"Always forms a parabola\"\n  - \"Highest exponent is 2 (quadratic term)\"\n  - \"a determines opening direction\"\n\nAdditional notes:\n- Use different colors for different function types in the table\n- Make the quadratic function curve stand out in bold color\n- Leave space between the table and graph for teacher annotations"

let log = ''

export const main = async () => {
  const res = await startChalkWorkflow([], {
    prompt: test,
    document: '<root></root>',
    stream: true
  })

  for await (const chunk of res as any) {
    const data = JSON.parse(chunk)
    console.log(data[data.length - 1])
  }

  log += `\n\n${JSON.stringify(res)}`
}

console.time('main')
main().then(() => {
  console.timeEnd('main')
  console.log(context)
})
