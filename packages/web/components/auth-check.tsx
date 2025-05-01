'use client';

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import useServerConnection from "@/lib/server-connection";
import { logto } from "@echoai/api";

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      // Skip auth check for /auth/* routes
      if (pathname?.startsWith("/auth")) {
        return;
      }

      const connection = useServerConnection()
      const status = await connection.auth.status()
      if (!status) {
        router.replace('/auth/login');
      }
    }

    checkAuth();
  }, [pathname, router]);

  return children;
} 