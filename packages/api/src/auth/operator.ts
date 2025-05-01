import type LogtoClient from "@logto/browser";

export default async function createOperator(logtoClient: LogtoClient) {
  const isAuth = await logtoClient.isAuthenticated()
  if (!isAuth) return new Error('User not authenticated')
  return logtoClient
}
