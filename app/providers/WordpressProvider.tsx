"use client";

import React, { createContext, useContext, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface WordpressContextType {
  isWordpress: boolean;
}

const WordpressContext = createContext<WordpressContextType>({ isWordpress: false });

function WordpressParamReader({ setIsWordpress }: { setIsWordpress: (val: boolean) => void }) {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasParam = searchParams?.has("wordpress") && searchParams.get("wordpress") !== "false";
    const hasSession = sessionStorage.getItem("wordpress") === "true";
    setIsWordpress(Boolean(hasParam || hasSession));
  }, [searchParams, setIsWordpress]);

  return null;
}

export function WordpressProvider({ children }: { children: React.ReactNode }) {
  const [isWordpress, setIsWordpress] = useState(false);

  return (
    <WordpressContext.Provider value={{ isWordpress }}>
      <Suspense fallback={null}>
        <WordpressParamReader setIsWordpress={setIsWordpress} />
      </Suspense>
      {children}
    </WordpressContext.Provider>
  );
}

export function useWordpress() {
  return useContext(WordpressContext);
}
