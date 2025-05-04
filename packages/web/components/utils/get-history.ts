"use server"

import { useConnection as getConnection } from "@/lib/connection"

export const getHistory = async () => {
  const connection = getConnection()
  const token = await connection.auth.token()
  connection.setToken(token)
  const res = await connection.chat.history()
  return res.map((item) => ({
    id: item.id,
    title: item.updated_at,
    date: item.updated_at,
  }))
}