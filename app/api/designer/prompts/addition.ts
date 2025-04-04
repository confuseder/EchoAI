import fs from 'fs'
import path from 'path'

const addition = fs.readFileSync(path.join(__dirname, 'addition.md'), 'utf-8')

export default addition
