"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function WordpressParamSyncInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

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
      // The parameter is not in the URL.
      // We should NOT auto-add it. Instead, we should clear it from sessionStorage
      // so the site accurately reflects the current URL.
      sessionStorage.removeItem("wordpress");
    }
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
