import { useConnection } from "@/lib/connection"
import { redirect } from "next/navigation"

export default function SignOut() {
  const connection = useConnection()
  connection.auth.signOut()

  return <div>SignOut</div>
}