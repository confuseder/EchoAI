import fs from 'fs'
import path from 'path'

const user = fs.readFileSync(path.join(__dirname, 'user.md'), 'utf-8')

export default user
