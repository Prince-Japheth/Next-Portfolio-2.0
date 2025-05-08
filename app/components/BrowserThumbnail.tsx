"use client";

import React, { useRef, useState } from 'react';
import '../../public/assets/css/browser.css';

interface BrowserThumbnailProps {
  id: string;
  title: string;
  url: string;
  position: { x: number; y: number };
  onRestore: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  onClose: () => void;
}

const BrowserThumbnail: React.FC<BrowserThumbnailProps> = ({
  id,
  title,
  url,
  position,
  onRestore,
  onPositionChange,
  onClose
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    
    const rect = thumbnailRef.current?.getBoundingClientRect();
    if (!rect) return;

    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
    setHasMoved(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setHasMoved(true);

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Keep within window bounds with padding
    const padding = 20; // Padding from window edges
    const width = thumbnailRef.current?.offsetWidth || 200;
    const height = thumbnailRef.current?.offsetHeight || 100;
    const maxX = window.innerWidth - width + padding;
    const maxY = window.innerHeight - height + padding;

    onPositionChange({
      x: Math.max(-padding, Math.min(newX, maxX)),
      y: Math.max(-padding, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const thumbnail = thumbnailRef.current;
      if (thumbnail) {
        const rect = thumbnail.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const screenCenter = window.innerWidth / 2;
        
        // Determine which edge is closer
        const snapToLeft = centerX < screenCenter;
        
        // Calculate new position
        const newX = snapToLeft ? 20 : window.innerWidth - rect.width - 20;
        
        onPositionChange({
          x: newX,
          y: position.y
        });
      }
    }
    setIsDragging(false);
    setHasMoved(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasMoved) {
      onRestore();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    onClose();
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Add resize handler to snap to edges
  React.useEffect(() => {
    const handleResize = () => {
      const thumbnail = thumbnailRef.current;
      if (thumbnail) {
        const rect = thumbnail.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const screenCenter = window.innerWidth / 2;
        
        // Determine which edge is closer
        const snapToLeft = centerX < screenCenter;
        
        // Calculate new position
        const newX = snapToLeft ? 20 : window.innerWidth - rect.width - 20;
        
        onPositionChange({
          x: newX,
          y: position.y
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [position.y, onPositionChange]);

  return (
    <div
      ref={thumbnailRef}
      className="browser-thumbnail"
      style={{
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="browser-thumbnail-header">
        <span className="browser-thumbnail-title">{title}</span>
        <button 
          className="browser-thumbnail-close"
          onClick={handleClose}
          data-tooltip="Close"
          style={{ cursor: 'pointer' }}
        >×</button>
      </div>
      <div 
        className="browser-thumbnail-content"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="browser-thumbnail-favicon">
          <img src={`https://www.google.com/s2/favicons?domain=${url}`} alt="favicon" />
        </div>
        <span className="browser-thumbnail-url">{url}</span>
      </div>
    </div>
  );
};

export default BrowserThumbnail; 