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

const THUMBNAIL_WIDTH = 200;
const THUMBNAIL_HEIGHT = 100;
const PADDING = 20;
const FILTER_BUTTON_HEIGHT = 60; // Height of the filter button
const FILTER_BUTTON_BOTTOM = 32; // Bottom padding of the filter button (2rem)
const BOTTOM_PADDING = FILTER_BUTTON_HEIGHT + FILTER_BUTTON_BOTTOM + PADDING; // Total space needed at bottom

export function BrowserProvider({ children }: { children: React.ReactNode }) {
  const [minimizedBrowsers, setMinimizedBrowsers] = useState<MinimizedBrowser[]>([]);
  const [activeBrowser, setActiveBrowser] = useState<MinimizedBrowser | null>(null);

  const calculateNewPosition = () => {
    const count = minimizedBrowsers.length;
    
    // Position from bottom to top on the right side, accounting for filter button
    const x = window.innerWidth - THUMBNAIL_WIDTH - PADDING;
    const y = window.innerHeight - THUMBNAIL_HEIGHT - BOTTOM_PADDING - (count * (THUMBNAIL_HEIGHT + PADDING));

    // If the thumbnail would go above the top of the screen, start from the bottom again
    if (y < PADDING) {
      return {
        x: x - (THUMBNAIL_WIDTH + PADDING), // Move one column to the left
        y: window.innerHeight - THUMBNAIL_HEIGHT - BOTTOM_PADDING
      };
    }

    return { x, y };
  };

  const minimizeBrowser = (browser: Omit<MinimizedBrowser, 'position'>) => {
    const position = calculateNewPosition();
    setMinimizedBrowsers(prev => [
      ...prev,
      {
        ...browser,
        position
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