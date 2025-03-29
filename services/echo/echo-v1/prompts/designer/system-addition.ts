import fs from 'fs'
import path from 'path'

const system_addition = fs.readFileSync(path.join(__dirname, 'system-addition.md'), 'utf-8')

export default system_addition