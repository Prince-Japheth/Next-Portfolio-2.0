"use client";

import React, { useState, useRef } from 'react';

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
  const [isClosing, setIsClosing] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageLink = project.link.includes('./assets/images/');

  const handleClick = (e: React.MouseEvent) => {
    if (isImageLink) {
      e.preventDefault();
      const rect = imageRef.current?.getBoundingClientRect();
      if (rect) {
        setClickPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300); // Match this with CSS animation duration
  };

  return (
    <>
      <div data-aos="zoom-in" className="flex-1 d-flex">
        <div className="project-item flex-1 shadow-box">
          <a 
            className="overlay-link" 
            href={project.link} 
            target={isImageLink ? undefined : "_blank"} 
            rel="noopener noreferrer"
            onClick={handleClick}
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
              target={isImageLink ? undefined : "_blank"} 
              rel="noopener noreferrer"
              onClick={handleClick}
              className="project-btn"
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
    </>
  );
};

export default ProjectItem;