"use client";

import React from 'react';
import ProjectItem from './ProjectItem';
import { projectData } from '../data/projects';

export default function PersonalProjectsRow() {
  const personalProjects = projectData.filter(p => p.isPersonal);

  return (
    <div className="row mt-24">
      <div className="col-md-12">
        <div className="personal-projects-marquee-wrap shadow-box" style={{ 
          overflow: 'hidden', 
          padding: '24px', 
          borderRadius: '30px', 
          position: 'relative',
        }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/assets/images/star-2.png" alt="Star" width={20} height={20} /> 
            Personal Projects 
            <img src="/assets/images/star-2.png" alt="Star" width={20} height={20} />
          </h3>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll-projects {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .projects-marquee-container {
              display: flex;
              gap: 24px;
              animation: scroll-projects 50s linear infinite;
              width: max-content;
            }
            .projects-marquee-container:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="projects-marquee-container">
            {/* Double the projects to create a seamless loop */}
            {[...personalProjects, ...personalProjects].map((project, index) => (
              <div key={`${project.title}-${index}`} style={{ width: '400px', flexShrink: 0 }}>
                <ProjectItem project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
