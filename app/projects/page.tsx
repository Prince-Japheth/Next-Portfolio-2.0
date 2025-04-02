'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import ProjectItem from '../components/ProjectItem';
import { useSearchParams, useRouter } from 'next/navigation';
import { projectData, categories } from '../data/projects';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All Projects');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectData
    : projectData.filter(project => project.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const { firstColumnProjects, secondColumnProjects } = React.useMemo(() => {
    if (selectedCategory === 'All Projects') {
      return {
        firstColumnProjects: filteredProjects.slice(0, 13),
        secondColumnProjects: filteredProjects.slice(13)
      };
    } else {
      const midPoint = Math.ceil(filteredProjects.length / 3);
      return {
        firstColumnProjects: filteredProjects.slice(0, midPoint),
        secondColumnProjects: filteredProjects.slice(midPoint)
      };
    }
  }, [filteredProjects, selectedCategory]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        buttonRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setIsDropdownOpen(false);
    const params = new URLSearchParams();
    if (newCategory !== 'All Projects') {
      params.set('category', newCategory);
    }
    router.push(`/projects${params.toString() ? `?${params.toString()}` : ''}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src="./assets/images/star-2.png" alt="Star" /> {selectedCategory === 'All Projects' ? selectedCategory : `${selectedCategory} Projects`} <img src="./assets/images/star-2.png" alt="Star" />
        </h1>

        <div className="filter-button-container">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="filter-button"
          >
            <img src="./assets/images/filter.svg" alt="Filter" style={{ width: '24px', height: '24px' }} />
          </button>

          <div 
            ref={dropdownRef}
            className={`filter-dropdown ${isDropdownOpen ? 'visible' : 'hidden'}`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {firstColumnProjects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
          <div className="col-md-8">
            <h1 className="section-heading" data-aos="fade-up">
              <img src="./assets/images/star-2.png" alt="Star" /> {selectedCategory === 'All Projects' ? selectedCategory : `${selectedCategory} Projects`}{" "}
              <img src="./assets/images/star-2.png" alt="Star" />
            </h1>
            {Array.from({ length: Math.ceil(secondColumnProjects.length / 2) }, (_, i) => (
              <div key={i} className="d-flex gap-24">
                {secondColumnProjects.slice(i * 2, i * 2 + 2).map((project, index) => (
                  <ProjectItem key={`second-${index}-${i}`} project={project} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main page component
export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}