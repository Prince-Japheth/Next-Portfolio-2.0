"use client";

import React, { useEffect, useState } from "react";
import { useRouteChange } from "../hooks/useRouteChange";
import { Providers } from "./Providers";
import { ClientLayoutBody } from "./ClientLayoutBody";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useRouteChange(); // Use our custom hook to handle route changes
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Providers>
      <ClientLayoutBody isClient={isClient}>
        {children}
      </ClientLayoutBody>
    </Providers>
  );
} 