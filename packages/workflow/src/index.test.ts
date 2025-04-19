import { ChatCompletionMessageParam } from "openai/resources.mjs"
import { startDesignerWorkflow } from "./designer"
import { writeFileSync } from "fs"
import { startLayoutWorkflow } from "./layout"
import { startSpeakerWorkflow } from "./speaker"

const designerContext: ChatCompletionMessageParam[] = []
const chalkContext: ChatCompletionMessageParam[] = []
const speakerContext: ChatCompletionMessageParam[] = []
const layoutContext: ChatCompletionMessageParam[] = []

let log = ''

export const main = async () => {
  await designer()
}

const designer = async () => {
  const result = await startDesignerWorkflow(designerContext, {
    prompt: '我今天学了三角函数课程，但是我不太理解，你能教我吗'
  })

  log += `designer: ${JSON.stringify(result)}\n`

  const layoutResult = startLayoutWorkflow(layoutContext, result[0])
  const speakerResult = startSpeakerWorkflow(speakerContext, result[0])
  const syncResult = await Promise.all([layoutResult, speakerResult])

  log += `layout: ${syncResult[0]}\n`
  log += `speaker: ${syncResult[1]}\n`
}
const chalk = async () => {}

main().then(() => {
  const fileName = `test-log-at-${Date.now()}.log`
  writeFileSync('./workflow/' + fileName, log)
})
