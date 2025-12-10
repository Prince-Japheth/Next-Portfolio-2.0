"use client";

import React, { useState, useRef, useEffect } from 'react';
import Browser from './Browser';
import { useBrowser } from '../context/BrowserContext';
import { useRouter } from 'next/navigation';
import Link from "next/link";

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
  const isExternalLink = project.link.includes('play') || project.link.includes('figma') || project.link.includes('bondyt') || project.link.includes('frat');
  const { minimizedBrowsers, activeBrowser } = useBrowser();
  const router = useRouter();

  // Watch for active browser changes
  useEffect(() => {
    if (activeBrowser && activeBrowser.id === `${project.title}-${project.link}`) {
      setIsBrowserOpen(true);
    }
  }, [activeBrowser, project.title, project.link]);

  const getImageSrc = (src: string) => {
    if (src.startsWith('http')) return src;
    // Remove leading './' and ensure it starts with /
    const cleanPath = src.replace(/^\.\//, '');
    return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  // Generate slug for project details link
  const slug = project.title
    .toLowerCase()
    .replace(/[|]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return (
    <>
      <div data-aos="zoom-in" className="project-item-card flex-1 d-flex flex-column">
        <div className="project-item flex-1 shadow-box">
          <div 
            className="overlay-link" 
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
          <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
          <div className="project-img">
            <div
              className="image-container"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: '180px',
                borderRadius: '30px',
                overflow: 'hidden',
              }}
            >
              <img 
                key={project.image} // Force re-render when image changes
                ref={imageRef} 
                src={getImageSrc(project.image)}
                alt={project.title}
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px',
                }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="project-info">
              <p>{project.category}</p>
              <h1>{project.title}</h1>
              <span style={{ fontSize: '12px !important' }}>{project.tools}</span>
            </div>
            <div 
              onClick={handleClick}
              className="project-btn"
              style={{ cursor: 'pointer' }}
            >
              <img src="./assets/images/icon.svg" alt="Button" />
            </div>
          </div>
        </div>
        {project.link.startsWith('http') && (
          <a
            href={`/projects/${slug}`}
            className="view-details-btn mb-5 shadow-box"
            title="View Details"
            onClick={(e) => {
              // Force a full page reload to avoid navigation issues
              e.preventDefault();
              window.location.href = `/projects/${slug}`;
            }}
          >
            View Details
          </a>
        )}
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