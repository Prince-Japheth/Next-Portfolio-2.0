"use client";

import React, { createContext, useContext, useState } from 'react';

interface MinimizedBrowser {
  id: string;
  title: string;
  url: string;
  position: { x: number; y: number };
}

interface BrowserContextType {
  minimizedBrowsers: MinimizedBrowser[];
  activeBrowser: MinimizedBrowser | null;
  minimizeBrowser: (browser: Omit<MinimizedBrowser, 'position'>) => void;
  restoreBrowser: (id: string) => void;
  updatePosition: (id: string, position: { x: number; y: number }) => void;
  openBrowser: (browser: MinimizedBrowser) => void;
  closeBrowser: () => void;
}

const BrowserContext = createContext<BrowserContextType | undefined>(undefined);

export function BrowserProvider({ children }: { children: React.ReactNode }) {
  const [minimizedBrowsers, setMinimizedBrowsers] = useState<MinimizedBrowser[]>([]);
  const [activeBrowser, setActiveBrowser] = useState<MinimizedBrowser | null>(null);

  const minimizeBrowser = (browser: Omit<MinimizedBrowser, 'position'>) => {
    setMinimizedBrowsers(prev => [
      ...prev,
      {
        ...browser,
        position: { x: window.innerWidth - 200, y: window.innerHeight - 100 }
      }
    ]);
    setActiveBrowser(null);
  };

  const restoreBrowser = (id: string) => {
    const browser = minimizedBrowsers.find(b => b.id === id);
    if (browser) {
      setActiveBrowser(browser);
      setMinimizedBrowsers(prev => prev.filter(b => b.id !== id));
    }
  };

  const updatePosition = (id: string, position: { x: number; y: number }) => {
    setMinimizedBrowsers(prev =>
      prev.map(browser =>
        browser.id === id ? { ...browser, position } : browser
      )
    );
  };

  const openBrowser = (browser: MinimizedBrowser) => {
    setActiveBrowser(browser);
    setMinimizedBrowsers(prev => prev.filter(b => b.id !== browser.id));
  };

  const closeBrowser = () => {
    setActiveBrowser(null);
  };

  return (
    <BrowserContext.Provider
      value={{
        minimizedBrowsers,
        activeBrowser,
        minimizeBrowser,
        restoreBrowser,
        updatePosition,
        openBrowser,
        closeBrowser
      }}
    >
      {children}
    </BrowserContext.Provider>
  );
}

export function useBrowser() {
  const context = useContext(BrowserContext);
  if (context === undefined) {
    throw new Error('useBrowser must be used within a BrowserProvider');
  }
  return context;
} 