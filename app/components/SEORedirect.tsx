"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SEORedirect({ to }: { to: string }) {
  const router = useRouter();
  const [isBotUser, setIsBotUser] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const isBot = /bot|crawler|spider|crawling|googlebot|bingbot|yandexbot|duckduckbot|slurp|ia_archiver/i.test(ua) || /chatgpt|ai|openai|anthropic|claude/i.test(ua);
    const hasBotClass = document.documentElement.classList.contains('is-bot');
    const isWebdriver = window.navigator.webdriver;

    if (isBot || hasBotClass || isWebdriver) {
      setIsBotUser(true);
      return; // Do not redirect bots, let them index the content!
    }

    if (to.startsWith('/')) {
      router.replace(to);
    } else {
      window.location.replace(to);
    }
  }, [to, router]);

  if (isBotUser) return null;

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
