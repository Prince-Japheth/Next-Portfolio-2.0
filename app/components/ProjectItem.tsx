"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Browser from './Browser';
import { useBrowser } from '../context/BrowserContext';
import { useRouter } from 'next/navigation';

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
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageLink = project.link.includes('./assets/images/');
  const isExternalLink = project.link.includes('play') || project.link.includes('figma') || project.link.includes('bondyt') || project.link.includes('topix');
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
    // Simple approach: just remove leading './' like ShowcaseProjectsBox does
    return src.startsWith("/") ? src : src.replace(/^\./, "");
  };

  // Add effect to handle image loading
  useEffect(() => {
    const img = new window.Image();
    img.src = getImageSrc(project.image);
    img.onload = () => {
      setIsImageLoading(false);
    };
    img.onerror = () => {
      setIsImageLoading(false); // Also clear loading state on error
    };
  }, [project.image]);

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

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const slug = project.title
      .toLowerCase()
      .replace(/[|]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    router.push(`/projects/${slug}`);
  };

  return (
    <>
      <div data-aos="zoom-in" className="flex-1 d-flex flex-column">
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
            <div className={`image-container ${isImageLoading ? 'loading' : ''}`}>
              <Image 
                ref={imageRef} 
                src={getImageSrc(project.image)}
                alt={project.title}
                width={800}
                height={600}
                quality={75}
                priority={false}
                loading="lazy"
                style={{ 
                  opacity: isImageLoading ? 0 : 1,
                  transition: 'opacity 0.3s ease-in-out',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px'
                }}
                onLoad={() => setIsImageLoading(false)}
              />
              {isImageLoading && (
                <>
                  <div className="image-loading-overlay">
                    <div className="image-loading-spinner"></div>
                  </div>
                  <Image 
                    src={getImageSrc(project.image)}
                    alt="Project blur" 
                    className="blur-placeholder"
                    width={800}
                    height={600}
                    quality={10}
                    priority={true}
                    style={{ 
                      opacity: isImageLoading ? 0.5 : 0,
                      filter: 'blur(20px)',
                      transform: 'scale(1.1)',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '30px'
                    }}
                  />
                </>
              )}
            </div>
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
        {project.link.startsWith('http') && (
          <button 
            onClick={handleDetailsClick}
            className="view-details-btn mb-5 shadow-box"
            title="View Details"
          >
            View Details
          </button>
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
