import type LogtoClient from "@logto/browser";

export default async function handleCallback(logtoClient: LogtoClient, href: string) {
  await logtoClient.handleSignInCallback(href)
  const isAuth = await logtoClient.isAuthenticated()
  return isAuth || new Error('User not authenticated')
}