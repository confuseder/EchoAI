'use client'

import useConnection from "@/lib/connection";
import { useEffect } from "react";

export default function RedirectToLogin() {
  const connection = useConnection()
  useEffect(() => {
    connection.auth.signIn(`${window.location.origin}/auth/callback`)
  }, [])
  return <div>Redirecting to login...</div>
}