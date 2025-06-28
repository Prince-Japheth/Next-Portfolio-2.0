import React from 'react';
import { notFound } from 'next/navigation';
import { projectData } from '../../data/projects';
import ProjectDetailsClient from './ProjectDetailsClient';
import { Suspense } from 'react';

// This is the server component
export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Find the current project
  const currentProjectIndex = projectData.findIndex(project => {
    const normalizedTitle = project.title
      .toLowerCase()
      .replace(/[|]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    const normalizedSlug = decodedSlug
      .toLowerCase()
      .replace(/[|]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    return normalizedTitle === normalizedSlug;
  });

  const currentProject = projectData[currentProjectIndex];

  // Find the next project with an HTTP link
  let nextProjectIndex = (currentProjectIndex + 1) % projectData.length;
  while (!projectData[nextProjectIndex].link.startsWith('http')) {
    nextProjectIndex = (nextProjectIndex + 1) % projectData.length;
    // If we've gone through all projects and found none with HTTP links, use the current project
    if (nextProjectIndex === currentProjectIndex) {
      nextProjectIndex = currentProjectIndex;
      break;
    }
  }
  const nextProject = projectData[nextProjectIndex];

  if (!currentProject) {
    notFound();
  }

  await new Promise(res => setTimeout(res, 400)); // Artificial delay for loader demo

  return (
    <Suspense fallback={
      <div className="project-details-wrap">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    }>
      <ProjectDetailsClient 
        currentProject={currentProject} 
        nextProject={nextProject} 
        allProjects={projectData}
      />
    </Suspense>
  );
} 