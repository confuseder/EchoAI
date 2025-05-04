import { useConnection } from "@/lib/connection";
import { redirect } from "next/navigation";

export default function AuthCallbackPage() {
  const connection = useConnection()
  connection.auth.callback().then(() => {
    redirect('/')
  })

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>Logging in...</h1>
    </div>
  )
}
