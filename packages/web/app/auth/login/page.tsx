import { useConnection } from "@/lib/connection";

export default function RedirectToLogin() {
  const connection = useConnection()
  connection.auth.signIn()
  return <div>Redirecting to login...</div>
}