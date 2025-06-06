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
  const [isFiltering, setIsFiltering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectData
    : projectData.filter(project => project.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const { firstColumnProjects, secondColumnProjects } = React.useMemo(() => {
    // Create a function to distribute projects between columns
    const interleaveProjects = (projects: typeof projectData) => {
      const firstColumn: typeof projectData = [];
      const secondColumn: typeof projectData = [];
      
      // Distribute projects in the pattern: first column gets single items, second column gets pairs
      for (let i = 0; i < projects.length; i++) {
        if (i % 3 === 0) {
          firstColumn.push(projects[i]);
        } else {
          secondColumn.push(projects[i]);
        }
      }
      
      return { firstColumnProjects: firstColumn, secondColumnProjects: secondColumn };
    };
    
    return interleaveProjects(filteredProjects);
  }, [filteredProjects]);

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
    setIsFiltering(true);
    if (typeof window !== "undefined" && window.showPreloader) {
      window.showPreloader();
    }
    
    setSelectedCategory(newCategory);
    setIsDropdownOpen(false);
    const params = new URLSearchParams();
    if (newCategory !== 'All Projects') {
      params.set('category', newCategory);
    }
    
    // Use Next.js router for navigation
    router.push(`/projects${params.toString() ? `?${params.toString()}` : ''}`);
  };

  // Add effect to handle filtering state
  useEffect(() => {
    if (isFiltering) {
      const timer = setTimeout(() => {
        setIsFiltering(false);
      }, 500); // Match the preloader animation duration
      return () => clearTimeout(timer);
    }
  }, [isFiltering]);

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
            disabled={isFiltering}
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
                disabled={isFiltering}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile view - single column */}
        <div className="d-md-none">
          {filteredProjects.map((project, index) => (
            <ProjectItem key={`mobile-${index}`} project={project} />
          ))}
        </div>

        {/* Desktop view - two columns */}
        <div className="row d-none d-md-flex">
          <div className="col-md-4">
            {firstColumnProjects.map((project, index) => (
              <ProjectItem key={`desktop-first-${index}`} project={project} />
            ))}
          </div>
          <div className="col-md-8">
            {Array.from({ length: Math.ceil(secondColumnProjects.length / 2) }, (_, i) => (
              <div key={i} className="d-flex gap-24">
                {secondColumnProjects.slice(i * 2, i * 2 + 2).map((project, index) => (
                  <ProjectItem key={`desktop-second-${index}-${i}`} project={project} />
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