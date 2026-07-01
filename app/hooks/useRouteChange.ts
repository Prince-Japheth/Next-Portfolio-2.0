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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const appendWordPressParam = (url: string | URL | null | undefined): string | URL | null | undefined => {
      if (!url) return url;
      try {
        const currentParams = new URLSearchParams(window.location.search);
        const storedWordpress = sessionStorage.getItem('wordpress');
        
        let wordpressValue = currentParams.get('wordpress');
        if (wordpressValue === null || wordpressValue === 'false') {
          if (wordpressValue === 'false') {
            sessionStorage.removeItem('wordpress');
            return url;
          }
          if (storedWordpress && storedWordpress !== 'false') {
            wordpressValue = storedWordpress;
          } else {
            return url;
          }
        } else {
          sessionStorage.setItem('wordpress', wordpressValue);
        }

        // Parse target URL
        const urlStr = url.toString();
        const isAbsolute = urlStr.startsWith('http://') || urlStr.startsWith('https://');
        const targetUrl = new URL(urlStr, window.location.origin);
        
        // Only append to same origin links to prevent parameter leaks
        if (targetUrl.origin === window.location.origin) {
          if (!targetUrl.searchParams.has('wordpress')) {
            targetUrl.searchParams.set('wordpress', wordpressValue);
            return isAbsolute ? targetUrl.toString() : targetUrl.pathname + targetUrl.search + targetUrl.hash;
          }
        }
      } catch (e) {
        // Fallback: indicate error via DOM state
        document.body.dataset.routerError = "true";
      }
      return url;
    };

    // Monkey-patch history.pushState
    const originalPushState = window.history.pushState;
    window.history.pushState = function (state, unused, url) {
      const updatedUrl = appendWordPressParam(url);
      return originalPushState.apply(this, [state, unused, updatedUrl]);
    };

    // Monkey-patch history.replaceState
    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function (state, unused, url) {
      const updatedUrl = appendWordPressParam(url);
      return originalReplaceState.apply(this, [state, unused, updatedUrl]);
    };

    // Intercept standard anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
          const currentParams = new URLSearchParams(window.location.search);
          const storedWordpress = sessionStorage.getItem('wordpress');
          
          let wordpressValue = currentParams.get('wordpress');
          if (wordpressValue === null || wordpressValue === 'false') {
            if (wordpressValue === 'false') {
              sessionStorage.removeItem('wordpress');
              return;
            }
            if (storedWordpress && storedWordpress !== 'false') {
              wordpressValue = storedWordpress;
            } else {
              return;
            }
          } else {
            sessionStorage.setItem('wordpress', wordpressValue);
          }

          try {
            const url = new URL(href, window.location.origin);
            if (!url.searchParams.has('wordpress')) {
              url.searchParams.set('wordpress', wordpressValue);
              anchor.setAttribute('href', url.pathname + url.search + url.hash);
            }
          } catch (err) {
            // Fallback: indicate error via DOM state
            document.body.dataset.routerError = "true";
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      // Restore original history methods
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      document.removeEventListener('click', handleAnchorClick, { capture: true });
    };
  }, []);
} 