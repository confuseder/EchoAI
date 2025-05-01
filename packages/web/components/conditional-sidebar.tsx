'use client';

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export function ConditionalSidebar() {
  const pathname = usePathname();
  const showSidebar = !pathname?.startsWith("/auth");

  if (!showSidebar) {
    return null;
  }

  return <Sidebar />;
} 