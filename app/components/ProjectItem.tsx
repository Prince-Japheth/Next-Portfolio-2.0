"use client";

import React, { useState, useRef, useEffect } from 'react';
import Browser from './Browser';
import { useBrowser } from '../context/BrowserContext';

interface ProjectItemProps {
  project: {
    title: string;
    category: string;
    tools: string;
    image: string;
    link: string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageLink = project.link.includes('./assets/images/');
  const isExternalLink = project.link.includes('play') || project.link.includes('figma');
  const { minimizedBrowsers, activeBrowser } = useBrowser();

  // Watch for active browser changes
  useEffect(() => {
    if (activeBrowser && activeBrowser.id === `${project.title}-${project.link}`) {
      setIsBrowserOpen(true);
    }
  }, [activeBrowser, project.title, project.link]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isExternalLink) {
      // Open external links in a new tab
      window.open(project.link, '_blank');
      return;
    }
    
    if (isImageLink) {
      const rect = imageRef.current?.getBoundingClientRect();
      if (rect) {
        setClickPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
      setIsModalOpen(true);
    } else {
      // Always open the browser, regardless of whether it's minimized
      setIsBrowserOpen(true);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <div data-aos="zoom-in" className="flex-1 d-flex">
        <div className="project-item flex-1 shadow-box">
          <a 
            className="overlay-link" 
            href={project.link} 
            onClick={handleClick}
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
          />
          <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
          <div className="project-img">
            <img ref={imageRef} src={project.image} alt="Project" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="project-info">
              <p>{project.category}</p>
              <h1>{project.title}</h1>
              <span style={{ fontSize: '12px !important' }}>{project.tools}</span>
            </div>
            <a 
              href={project.link} 
              onClick={handleClick}
              className="project-btn"
              target={isExternalLink ? "_blank" : undefined}
              rel={isExternalLink ? "noopener noreferrer" : undefined}
            >
              <img src="./assets/images/icon.svg" alt="Button" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className={`image-modal-overlay ${isClosing ? 'closing' : ''}`} 
          onClick={handleClose}
          style={{
            '--origin-x': `${clickPosition.x}px`,
            '--origin-y': `${clickPosition.y}px`
          } as React.CSSProperties}
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleClose}>
              ×
            </button>
            <img 
              src={project.link} 
              alt={project.title}
              className="modal-image"
            />
          </div>
        </div>
      )}

      {/* Browser Modal - only render if not an external link */}
      {!isExternalLink && (
        <Browser
          isOpen={isBrowserOpen}
          onClose={() => setIsBrowserOpen(false)}
          url={project.link}
          title={project.title}
        />
      )}
    </>
  );
};

export default ProjectItem;
