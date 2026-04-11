"use client"

import React from "react"
import { BrowserProvider } from "../context/BrowserContext"
import { LoadingProvider } from "../context/LoadingContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <BrowserProvider>
        {children}
      </BrowserProvider>
    </LoadingProvider>
  )
}
