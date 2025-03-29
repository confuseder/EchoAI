import fs from 'fs'
import path from 'path'

const system = fs.readFileSync(path.join(__dirname, 'system.md'), 'utf-8')

export default system