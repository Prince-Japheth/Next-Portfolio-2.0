"use client";

import { useEffect, Suspense, useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function WordpressParamSyncInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const wordpressValue = searchParams.get("wordpress");

    if (wordpressValue !== null) {
      if (wordpressValue !== "false") {
        sessionStorage.setItem("wordpress", wordpressValue);
      } else {
        sessionStorage.removeItem("wordpress");
      }
    } else {
      if (isInitialLoad.current) {
        // Initial load without the parameter: clear session storage
        sessionStorage.removeItem("wordpress");
      } else {
        // Client-side navigation without the parameter: restore it from session storage if it exists
        const storedWordpress = sessionStorage.getItem("wordpress");
        if (storedWordpress && storedWordpress !== "false") {
          const currentParams = new URLSearchParams(window.location.search);
          currentParams.set("wordpress", storedWordpress);
          router.replace(`${pathname}?${currentParams.toString()}`);
        }
      }
    }
    isInitialLoad.current = false;
  }, [searchParams, pathname, router]);

  return null;
}

export default function WordpressParamSync() {
  return (
    <Suspense fallback={null}>
      <WordpressParamSyncInner />
    </Suspense>
  );
}
