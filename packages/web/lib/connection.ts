import { createConnection } from "@echoai/api"

export const useConnection = (token?: string) => {
  return createConnection({ token: token || '' })
}