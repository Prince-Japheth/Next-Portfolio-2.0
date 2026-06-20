"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface WordpressContextType {
  isWordpress: boolean;
}

const WordpressContext = createContext<WordpressContextType>({ isWordpress: false });

export function WordpressProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isWordpress, setIsWordpress] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Check URL params first
    const hasParam = searchParams?.has("wordpress") && searchParams.get("wordpress") !== "false";
    
    // Check session storage as fallback
    const hasSession = sessionStorage.getItem("wordpress") === "true";
    
    setIsWordpress(Boolean(hasParam || hasSession));
  }, [searchParams]);

  return (
    <WordpressContext.Provider value={{ isWordpress }}>
      {children}
    </WordpressContext.Provider>
  );
}

export function useWordpress() {
  return useContext(WordpressContext);
}
