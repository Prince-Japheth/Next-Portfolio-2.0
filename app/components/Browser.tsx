"use client";

import React, { useState, useEffect } from 'react';
import { useBrowser } from '../context/BrowserContext';
import '../../public/assets/css/browser.css';

interface BrowserProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const Browser: React.FC<BrowserProps> = ({ isOpen, onClose, url, title }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [showCloseTooltip, setShowCloseTooltip] = useState(false);
  const [showExpandTooltip, setShowExpandTooltip] = useState(false);
  const { minimizeBrowser, activeBrowser, closeBrowser } = useBrowser();

  useEffect(() => {
    setCurrentUrl(url);
  }, [url]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      setShowCloseTooltip(true);
      setShowExpandTooltip(true);
      const timer = setTimeout(() => {
        setShowCloseTooltip(false);
        setShowExpandTooltip(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'auto';
      setShowCloseTooltip(false);
      setShowExpandTooltip(false);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleMinimize = () => {
    minimizeBrowser({
      id: `${title}-${url}`,
      title,
      url
    });
    onClose();
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleOpenInNewTab = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleClose = () => {
    closeBrowser();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="browser-overlay" onClick={handleClose}>
      <div 
        className={`browser-container ${isMaximized ? 'maximized' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="browser-header">
          <div className="browser-controls">
            <button 
              className="browser-close" 
              onClick={handleClose}
              data-tooltip="Close (Esc)"
              data-tooltip-position="bottom"
              data-show-tooltip={showCloseTooltip}
            >×</button>
            <button 
              className="browser-minimize" 
              onClick={handleMinimize}
              data-tooltip="Minimize"
              data-tooltip-position="bottom"
            >−</button>
            <button 
              className="browser-maximize" 
              onClick={handleMaximize}
              data-tooltip={isMaximized ? "Restore" : "Maximize"}
              data-tooltip-position="bottom"
            >□</button>
          </div>
          <div className="browser-address-bar">
            <input 
              type="text" 
              value={currentUrl} 
              onChange={(e) => setCurrentUrl(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  window.open(currentUrl, '_blank', 'noopener,noreferrer');
                  onClose();
                }
              }}
            />
          </div>
          <div className="browser-actions">
            <button 
              className="browser-expand" 
              onClick={handleOpenInNewTab} 
              data-tooltip="Open in new tab"
              data-tooltip-position="bottom"
              data-show-tooltip={showExpandTooltip}
            >
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path fill="currentColor" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="browser-content">
          {isLoading && (
            <div className="browser-loading">
              <div className="browser-loading-spinner"></div>
              <span>Loading {title}... <br/> Please wait...</span>
            </div>
          )}
          <iframe 
            src={url} 
            title={title}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            onLoad={handleIframeLoad}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Browser; 