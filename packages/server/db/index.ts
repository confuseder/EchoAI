import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './chats'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

const db = drizzle(pool, { schema })

export default db
