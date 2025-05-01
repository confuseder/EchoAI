import type LogtoClient from "@logto/browser";

export default async function getStatus(logtoClient: LogtoClient) {
  return await logtoClient.isAuthenticated()
}
