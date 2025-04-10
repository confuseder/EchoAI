import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const system = fs.readFileSync(path.join(__dirname, '../prompts/system.md'), 'utf-8')

export default system