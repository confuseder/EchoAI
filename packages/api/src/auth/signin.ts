// import type LogtoClient from "@logto/browser";
import { signIn, getLogtoContext } from "@logto/next/server-actions";
import type { LogtoNextConfig } from "@logto/next"

export default async function handleSignIn(config: LogtoNextConfig, redirectUri?: string) {
  const { isAuthenticated } = await getLogtoContext(config)
  if (isAuthenticated) return new Error('User already authenticated')
  return await signIn(config, {
    redirectUri: redirectUri || config.baseUrl
  })
}
