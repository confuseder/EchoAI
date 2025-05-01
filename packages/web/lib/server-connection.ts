import { createConnection, logto } from "@echoai/api"

export default function useServerConnection(immediateCallback?: () => void) {
  const connection = createConnection()
  logto.getIdToken().then((token) => {
    connection.setToken(token!)
    immediateCallback?.()
  })

  return connection
}
