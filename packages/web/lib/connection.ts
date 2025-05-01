import { createConnection, logto } from "@echoai/api"
import { useEffect } from "react"

export default function useConnection(immediateCallback?: () => void) {
  const connection = createConnection()
  useEffect(() => {
    logto.getAccessToken().then((token) => {
      connection.setToken(token)
      immediateCallback?.()
    })
  }, [])

  return connection
}
