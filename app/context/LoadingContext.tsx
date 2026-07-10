"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  // Start as true so the preloader covers the blank-screen period during
  // SSR→client hydration. Dismissed as soon as the page signals it's ready.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dismiss = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      // Page already fully loaded (fast connection / cached) —
      // wait one rAF so the user sees the preloader at least briefly.
      const raf = requestAnimationFrame(dismiss);
      return () => cancelAnimationFrame(raf);
    }

    // Otherwise wait for the window load event (all resources fetched).
    window.addEventListener('load', dismiss, { once: true });

    // Safety net: never leave the preloader up longer than 3 s.
    const fallback = setTimeout(dismiss, 3000);

    return () => {
      window.removeEventListener('load', dismiss);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
