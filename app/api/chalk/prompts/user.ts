import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

console.log(process.env)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const user = fs.readFileSync(path.join(__dirname, '../prompts/user.md'), 'utf-8')

export default user
