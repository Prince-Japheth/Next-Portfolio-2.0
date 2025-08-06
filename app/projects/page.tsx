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
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll to top when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchQuery]);

  const filteredProjects = projectData.filter(project => {
    // Category filter
    const categoryMatch = selectedCategory === 'All Projects' ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase());

    // Search filter
    const searchMatch = !searchQuery.trim() ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.brief.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

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

  // Create unique keys that include project title and image to prevent image mixing
  const createUniqueKey = (project: any, prefix: string, index: number) => {
    // Find the original index of the project in the full projectData array
    const originalIndex = projectData.findIndex(p => p.title === project.title);
    return `${prefix}-${originalIndex}-${project.title.replace(/\s+/g, '-').toLowerCase()}-${project.image.replace(/[^a-zA-Z0-9]/g, '')}-${index}`;
  };

  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src="./assets/images/star-2.png" alt="Star" /> {selectedCategory === 'All Projects' ? selectedCategory : `${selectedCategory} Projects`} <img src="./assets/images/star-2.png" alt="Star" />
        </h1>

        <div className="projects-controls" data-aos="fade-up">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search projects by name, category, tools, or brief..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">
                <i className="iconoir-search"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile view - single column */}
        <div className="d-md-none">
          {filteredProjects.map((project, index) => (
            <ProjectItem 
              key={`mobile-${project.title}-${project.image}`} 
              project={project} 
            />
          ))}
        </div>

        {/* Desktop view - two columns */}
        <div className="row d-none d-md-flex">
          <div className="col-md-4">
            {firstColumnProjects.map((project, index) => (
              <ProjectItem 
                key={`desktop-first-${project.title}-${project.image}`} 
                project={project} 
              />
            ))}
          </div>
          <div className="col-md-8">
            {Array.from({ length: Math.ceil(secondColumnProjects.length / 2) }, (_, i) => (
              <div key={`row-${i}`} className="d-flex gap-24">
                {secondColumnProjects.slice(i * 2, i * 2 + 2).map((project, index) => (
                  <ProjectItem 
                    key={`desktop-second-${i}-${project.title}-${project.image}`} 
                    project={project} 
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Button */}
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
      </div>
    </section>
  );
}

// Main page component
export default function Projects() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  );
}