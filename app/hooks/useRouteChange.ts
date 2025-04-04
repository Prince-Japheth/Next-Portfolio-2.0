"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    reinitCursorEffect?: () => void;
  }
}

export function useRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Reinitialize cursor effect on route change
    if (typeof window !== "undefined" && window.reinitCursorEffect) {
      window.reinitCursorEffect();
    }
  }, [pathname]);
} 