import { LogtoNextConfig } from "@logto/next";
import { getAccessToken } from "@logto/next/server-actions"

export default async function getToken(config: LogtoNextConfig) {
  return await getAccessToken(config)
}
