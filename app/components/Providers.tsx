"use client"

import React from "react"
import { BrowserProvider } from "../context/BrowserContext"
import { LoadingProvider } from "../context/LoadingContext"
import { WordpressProvider } from "../providers/WordpressProvider"
import { LenisProvider } from "../providers/LenisProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <BrowserProvider>
        <WordpressProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </WordpressProvider>
      </BrowserProvider>
    </LoadingProvider>
  )
}
