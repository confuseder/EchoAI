import { signOut, getLogtoContext } from "@logto/next/server-actions";
import type { LogtoNextConfig } from "@logto/next"

export default async function handleSignOut(config: LogtoNextConfig) {
  const { isAuthenticated } = await getLogtoContext(config)
  if (!isAuthenticated) return new Error('User not authenticated')
  return await signOut(config)
}
