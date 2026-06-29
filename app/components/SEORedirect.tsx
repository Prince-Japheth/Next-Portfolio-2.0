"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SEORedirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    if (to.startsWith('/')) {
      router.replace(to);
    } else {
      window.location.replace(to);
    }
  }, [to, router]);
  return null;
}
