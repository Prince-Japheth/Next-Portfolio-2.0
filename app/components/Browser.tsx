"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  const [loadError, setLoadError] = useState(false);
  const [showCloseTooltip, setShowCloseTooltip] = useState(false);
  const [showExpandTooltip, setShowExpandTooltip] = useState(false);
  const { minimizeBrowser, activeBrowser, closeBrowser } = useBrowser();
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout>();
  const initialLoadTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setCurrentUrl(url);
    setIsLoading(true);
    setLoadError(false);
  }, [url]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      setLoadError(false);
      setShowCloseTooltip(true);
      setShowExpandTooltip(true);
      
      // Reduced timeout for better UX - 5 seconds instead of 15
      loadingTimeoutRef.current = setTimeout(() => {
        if (isLoading) {
          setLoadError(true);
          setIsLoading(false);
        }
      }, 5000);
      
      // Initial load timeout - show iframe after 2 seconds regardless
      initialLoadTimeoutRef.current = setTimeout(() => {
        if (isLoading) {
          setIsLoading(false);
          // Don't set error, just show the iframe
        }
      }, 2000);
      
      const tooltipTimer = setTimeout(() => {
        setShowCloseTooltip(false);
        setShowExpandTooltip(false);
      }, 1000);
      
      return () => {
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
        if (initialLoadTimeoutRef.current) {
          clearTimeout(initialLoadTimeoutRef.current);
        }
        clearTimeout(tooltipTimer);
      };
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
    setLoadError(false);
    
    // Clear timeouts when iframe loads successfully
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    if (initialLoadTimeoutRef.current) {
      clearTimeout(initialLoadTimeoutRef.current);
    }
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setLoadError(true);
    
    // Clear timeouts on error
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    if (initialLoadTimeoutRef.current) {
      clearTimeout(initialLoadTimeoutRef.current);
    }
  };

  // Add this to check if iframe content is accessible
  const checkIframeContent = () => {
    if (iframeRef.current) {
      try {
        // Try to access iframe content - if blocked, this will throw
        const iframeDoc = iframeRef.current.contentDocument;
        if (iframeDoc && iframeDoc.readyState === 'complete') {
          handleIframeLoad();
        }
      } catch (error) {
        // Iframe is blocked or cross-origin, but might still be loading
        // Don't set error immediately
        console.log('Iframe content not accessible, but may be loading');
      }
    }
  };

  useEffect(() => {
    if (isOpen && !isLoading && !loadError) {
      // Check iframe content periodically
      const contentCheckInterval = setInterval(checkIframeContent, 1000);
      return () => clearInterval(contentCheckInterval);
    }
  }, [isOpen, isLoading, loadError]);

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
          {loadError && (
            <div className="browser-loading">
              <div className="browser-error-icon">⚠️</div>
              <span>Unable to load {title} <br/> 
                <small>This site may not allow embedding</small><br/>
                <button 
                  onClick={handleOpenInNewTab}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '8px'
                  }}
                >
                  Open in New Tab
                </button>
              </span>
            </div>
          )}
          <iframe 
            ref={iframeRef}
            src={url} 
            title={title}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ 
              opacity: isLoading ? 0.3 : 1,
              transition: 'opacity 0.3s ease'
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
            // Add loading attribute for better performance
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Browser;