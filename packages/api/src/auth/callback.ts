import { getLogtoContext, handleSignIn } from "@logto/next/server-actions";
import type { LogtoNextConfig } from "@logto/next"

export default async function handleCallback(
  config: LogtoNextConfig,
  searchParams: URLSearchParams
) {
  const { isAuthenticated } = await getLogtoContext(config)
  await handleSignIn(config, searchParams)
  return isAuthenticated || new Error('User not authenticated')
}