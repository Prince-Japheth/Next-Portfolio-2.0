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
    if (isDragging && !hasMoved) {
      onRestore();
    }
    setIsDragging(false);
    setHasMoved(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!hasMoved) {
      onRestore();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
      onClick={handleClick}
    >
      <div className="browser-thumbnail-header">
        <span className="browser-thumbnail-title">{title}</span>
        <button 
          className="browser-thumbnail-close"
          onClick={handleClose}
          data-tooltip="Close"
        >×</button>
      </div>
      <div className="browser-thumbnail-content">
        <div className="browser-thumbnail-favicon">
          <img src={`https://www.google.com/s2/favicons?domain=${url}`} alt="favicon" />
        </div>
        <span className="browser-thumbnail-url">{url}</span>
      </div>
    </div>
  );
};

export default BrowserThumbnail; 