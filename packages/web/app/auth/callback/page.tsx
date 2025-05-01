'use client'

import { useEffect } from 'react';
import useConnection from "@/lib/connection";

export default function AuthCallbackPage() {
  const connection = useConnection()
  useEffect(() => {
    const currentUrl = window.location.href;
    console.log(currentUrl)
    connection.auth.callback(currentUrl);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>Logging in...</h1>
    </div>
  )
}
