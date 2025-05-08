"use client";

import React from 'react';
import { useBrowser } from '../context/BrowserContext';
import BrowserThumbnail from './BrowserThumbnail';

const MinimizedBrowsers: React.FC = () => {
  const { minimizedBrowsers, openBrowser, updatePosition, restoreBrowser } = useBrowser();

  return (
    <>
      {minimizedBrowsers.map((browser) => (
        <BrowserThumbnail
          key={browser.id}
          {...browser}
          onRestore={() => openBrowser(browser)}
          onPositionChange={(position) => updatePosition(browser.id, position)}
          onClose={() => restoreBrowser(browser.id)}
        />
      ))}
    </>
  );
};

export default MinimizedBrowsers; 