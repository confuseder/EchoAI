import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './chats'

const db = drizzle({
  connection: process.env.POSTGRES_URL,
  schema,
})

export default db
