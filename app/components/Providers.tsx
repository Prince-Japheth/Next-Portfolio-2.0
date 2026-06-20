"use client"

import React from "react"
import { BrowserProvider } from "../context/BrowserContext"
import { LoadingProvider } from "../context/LoadingContext"
import { WordpressProvider } from "../providers/WordpressProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <BrowserProvider>
        <WordpressProvider>
          {children}
        </WordpressProvider>
      </BrowserProvider>
    </LoadingProvider>
  )
}
