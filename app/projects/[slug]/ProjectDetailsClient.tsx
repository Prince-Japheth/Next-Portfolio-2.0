'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Project } from '../../data/projects';
import Browser from '../../components/Browser';

interface ProjectDetailsClientProps {
  currentProject: Project;
  nextProject: Project;
  allProjects: Project[];
}

export default function ProjectDetailsClient({ currentProject, nextProject, allProjects }: ProjectDetailsClientProps) {
  const router = useRouter();
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const hasHttpLink = currentProject.link.startsWith('http');
  const isExternalLink = currentProject.link.includes('play') || 
                        currentProject.link.includes('figma') || 
                        currentProject.link.includes('bondyt') || 
                        currentProject.link.includes('topix');

  const handleNextProject = () => {
    const currentIndex = allProjects.findIndex(p => p.title === currentProject.title);
    
    let nextIndex = (currentIndex + 1) % allProjects.length;
    while (!allProjects[nextIndex].link.startsWith('http')) {
      nextIndex = (nextIndex + 1) % allProjects.length;
      if (nextIndex === currentIndex) break;
    }
    
    const nextProjectWithLink = allProjects[nextIndex];
    const nextSlug = nextProjectWithLink.title
      .toLowerCase()
      .replace(/[|]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    router.push(`/projects/${nextSlug}`);
  };

  const handleVisitProject = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isExternalLink) {
      // Open external links in a new tab
      window.open(currentProject.link, '_blank');
      return;
    }
    
    // Open in browser component
    setIsBrowserOpen(true);
  };

  // Helper function to ensure absolute paths
  const getImagePath = (path: string) => {
    if (path.startsWith('http')) return path;
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <main className="project-details-wrap">
      <div className="container">
        <div className="project-details-content d-flex gap-24" data-aos="zoom-in">
          {/* Left side - Image */}
          <div className="project-details-image flex-1">
            <div className="project-details-2-img shadow-box" style={{ borderRadius: '30px', padding: '1px' }}>
              <img
                src={getImagePath(currentProject.image)}
                alt={currentProject.title}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px',
                  objectFit: 'cover'
                }}
                className="shadow-box"
              />
            </div>
          </div>

          {/* Right side - Info boxes */}
          <div className="project-details-info-column flex-1 d-flex flex-column">
            <div className="project-infos-wrap shadow-box" style={{ marginBottom: 'auto' }}>
              <img src="/assets/images/bg1.png" alt="Background" className="bg-img" />
              <img src="/assets/images/icon2.png" alt="Icon" />
              <div className="project-details-info">
                <h3>{currentProject.title}</h3>
                <p>{currentProject.brief}</p>
                {hasHttpLink && (
                  <button 
                    onClick={handleVisitProject}
                    className="view-project-btn shadow-box"
                    title="View Project"
                  >
                    View Project
                  </button>
                )}
              </div>
            </div>

            <br />

            <div className="project-infos-wrap shadow-box" style={{ marginTop: 'auto' }}>
              <img src="/assets/images/bg1.png" alt="Background" className="bg-img" />
              <img src="/assets/images/icon2.png" alt="Icon" />
              <div className="project-details-info">
                <h3>About</h3>
                <p>{currentProject.about}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content */}
        <div data-aos="zoom-in">
          <div className="project-about-2 d-flex shadow-box mb-24">
            <img src="/assets/images/bg1.png" alt="Background" className="bg-img" />
            <div className="left-details">
              <img src="/assets/images/icon3.png" alt="Icon" />
              <ul>
                <li>
                  <p>Category</p>
                  <h4>{currentProject.category}</h4>
                </li>
                <li>
                  <p>Tools Used</p>
                  <h4>{currentProject.tools}</h4>
                </li>
                <li>
                  <p>Project Type</p>
                  <h4>{currentProject.category}</h4>
                </li>
                <li>
                  <p>Status</p>
                  <h4>{currentProject.status}</h4>
                </li>
              </ul>
            </div>
            <div className="right-details">
              <h3>Description</h3>
              <p>{currentProject.description}</p>
            </div>
          </div>
        </div>

        <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
          {nextProject.link.startsWith('http') && (
            <button onClick={handleNextProject} className="big-btn shadow-box">
              Next Project: {nextProject.title}
            </button>
          )}
        </div>
      </div>

      {/* Browser Modal - only render if not an external link */}
      {hasHttpLink && !isExternalLink && (
        <Browser
          isOpen={isBrowserOpen}
          onClose={() => setIsBrowserOpen(false)}
          url={currentProject.link}
          title={currentProject.title}
        />
      )}
    </main>
  );
} 