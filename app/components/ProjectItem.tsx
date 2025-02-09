// ../components/ProjectItem.tsx
import React from 'react';

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
  return (
    <div data-aos="zoom-in" className="flex-1 d-flex">
      <div className="project-item flex-1 shadow-box">
        <a className="overlay-link" href={project.link} target="_blank" rel="noopener noreferrer" />
        <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
        <div className="project-img">
          <img src={project.image} alt="Project" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="project-info">
            <p>{project.category}</p>
            <h1>{project.title}</h1>
            <span style={{ fontSize: '12px !important' }}>{project.tools}</span>
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
            <img src="./assets/images/icon.svg" alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;