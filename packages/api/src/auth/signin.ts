import type LogtoClient from "@logto/browser";

export default async function handleSignIn(logtoClient: LogtoClient, redirectUri: string) {
  const isAuth = await logtoClient.isAuthenticated()
  if (isAuth) return new Error('User already authenticated')
  return await logtoClient.signIn({
    redirectUri,
  })
}
