import React from 'react';
import { notFound } from 'next/navigation';
import { projectData } from '../../data/projects';
import ProjectDetailsClient from './ProjectDetailsClient';
import { Suspense } from 'react';
import { Metadata } from 'next';
import DOMPurify from 'isomorphic-dompurify';

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  // Find the current project
  const currentProject = projectData.find(project => {
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

  if (!currentProject) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: currentProject.title,
    description: currentProject.brief || `View details about ${currentProject.title} - a project by Japheth Jerry. ${currentProject.tools}`,
    keywords: [
      currentProject.title,
      currentProject.category,
      ...currentProject.tools.split(', '),
      'Project Case Study',
      'Web Development',
      'Portfolio Project'
    ],
    openGraph: {
      title: `${currentProject.title} - Project Case Study`,
      description: currentProject.brief || `View details about ${currentProject.title} - a project by Japheth Jerry.`,
      images: [
        {
          url: "/assets/images/project_0.png",
          width: 1200,
          height: 630,
          alt: `${currentProject.title} - Project Screenshot`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.japhethjerry.space/projects/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

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

  if (!currentProject) {
    notFound();
  }

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

  return (
    <>
      {/* Structured Data for Project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": currentProject.title,
            "description": currentProject.brief || `A project by Japheth Jerry: ${currentProject.title}`,
            "author": {
              "@type": "Person",
              "name": "Japheth Jerry",
              "jobTitle": "Software Engineer",
              "url": "https://www.japhethjerry.space"
            },
            "creator": {
              "@type": "Person",
              "name": "Japheth Jerry"
            },
            "dateCreated": new Date().toISOString(),
            "genre": currentProject.category,
            "keywords": currentProject.tools,
            "image": currentProject.image.startsWith('http') ? currentProject.image : `https://www.japhethjerry.space${currentProject.image}`,
            "url": `https://www.japhethjerry.space/projects/${slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.japhethjerry.space/projects/${slug}`
            }
          }))
        }}
      />
      
      <Suspense fallback={null}>
        <ProjectDetailsClient 
          currentProject={currentProject} 
          nextProject={nextProject} 
          allProjects={projectData}
        />
      </Suspense>
    </>
  );
}