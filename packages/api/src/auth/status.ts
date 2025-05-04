import { getLogtoContext } from "@logto/next/server-actions";
import type { LogtoNextConfig } from "@logto/next"

export default async function getStatus(config: LogtoNextConfig) {
  const { isAuthenticated } = await getLogtoContext(config)
  return isAuthenticated
}
