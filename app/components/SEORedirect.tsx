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
  return (
    <div id="preloader" className="preloader">
      <div className="black_wall"></div>
      <div id="wifi-loader">
        <svg className="circle-outer" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40" />
          <circle className="front" cx="43" cy="43" r="40" />
          <circle className="glow" cx="43" cy="43" r="40" />
        </svg>
        <svg className="circle-middle" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27" />
          <circle className="front" cx="30" cy="30" r="27" />
          <circle className="glow" cx="30" cy="30" r="27" />
        </svg>
        <svg className="circle-inner" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14" />
          <circle className="front" cx="17" cy="17" r="14" />
          <circle className="glow" cx="17" cy="17" r="14" />
        </svg>
        <div className="text" data-text="Loading" />
      </div>
    </div>
  );
}
