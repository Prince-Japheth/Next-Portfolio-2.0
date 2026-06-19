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
      const storedWordpress = sessionStorage.getItem("wordpress");
      if (storedWordpress && storedWordpress !== "false") {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set("wordpress", storedWordpress);
        router.replace(`${pathname}?${currentParams.toString()}`);
      }
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
