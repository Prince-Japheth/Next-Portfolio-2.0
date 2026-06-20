'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import ProjectItem from '../components/ProjectItem';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { projectData, categories } from '../data/projects';
import Image from 'next/image';

// URL parameter mapping for shorter URLS and combined categories
const categoryMapping: Record<string, string | string[]> = {
  'DESIGN': ['UI/UX DESIGN', 'Graphic Design'], // Combined category
  'design': ['UI/UX DESIGN', 'Graphic Design'], // Case-insensitive
  'mobile': 'Mobile Development',
  'mob': 'Mobile Development',
  'web': 'Web Development',
  'ui': 'UI/UX DESIGN',
  'ux': 'UI/UX DESIGN',
  'graphic': 'Graphic Design',
  'gd': 'Graphic Design',
};

// Function to normalize category from URL parameter
const getCategoryFromUrl = (urlCategory: string | null): string | string[] => {
  if (!urlCategory) return 'All Projects';
  
  const normalized = urlCategory.trim();
  
  // Check if it's a mapped category
  if (categoryMapping[normalized]) {
    return categoryMapping[normalized];
  }
  
  // Check if it matches any actual category (case-insensitive)
  const matchedCategory = categories.find(
    cat => cat.toLowerCase() === normalized.toLowerCase()
  );
  
  return matchedCategory || normalized;
};

// Reverse mapping: get short URL alias from full category name
const getShortUrlAlias = (category: string): string => {
  const reverseMapping: Record<string, string> = {
    'Mobile Development': 'mobile',
    'Web Development': 'web',
    'UI/UX DESIGN': 'ui',
    'Graphic Design': 'graphic',
    'DESIGN': 'DESIGN',
    'All Projects': '',
  };
  
  return reverseMapping[category] || category;
};

interface ProjectsClientProps {
  initialCategory: string | null;
  initialWordpress: boolean;
}

export default function ProjectsClient({ initialCategory, initialWordpress }: ProjectsClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize from props to ensure SSR matches the initial HTML
  const [wordpress, setWordpress] = useState(initialWordpress);
  
  const urlCategory = searchParams ? searchParams.get('category') : initialCategory;
  const resolvedCategory = getCategoryFromUrl(urlCategory);
  
  const onlyWebDev = wordpress;
  const hideFilter = wordpress;
  
  const [selectedCategory, setSelectedCategory] = useState(
    Array.isArray(resolvedCategory) ? 'DESIGN' : resolvedCategory
  );
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sync wordpress state with searchParams on the client
  useEffect(() => {
    if (!searchParams) return;
    const hasParam = searchParams.has('wordpress') && searchParams.get('wordpress') !== 'false';
    const hasSession = typeof window !== 'undefined' && sessionStorage.getItem('wordpress') === 'true';
    setWordpress(hasParam || hasSession);
  }, [searchParams]);

  // Update selected category when URL parameter or wordpress changes
  useEffect(() => {
    if (onlyWebDev) {
      setSelectedCategory('Web & Design');
    } else {
      const currentUrlCategory = searchParams ? searchParams.get('category') : null;
      const currentResolvedCategory = getCategoryFromUrl(currentUrlCategory);
      setSelectedCategory(
        Array.isArray(currentResolvedCategory) ? 'DESIGN' : currentResolvedCategory
      );
    }
  }, [searchParams, onlyWebDev]);

  // Scroll to top when search query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchQuery]);

  const filteredProjects = projectData.filter(project => {
    // Category filter - handle combined DESIGN category
    let categoryMatch = false;
    
    if (onlyWebDev) {
      // Show web dev projects and ui/ux design projects
      categoryMatch = 
        project.category.toLowerCase().includes('web development') || 
        project.category.toLowerCase().includes('web dev') ||
        project.category.toLowerCase().includes('ui/ux');
    } else if (selectedCategory === 'All Projects') {
      categoryMatch = true;
    } else if (selectedCategory === 'DESIGN' || selectedCategory === 'design') {
      // Show both UI/UX DESIGN and Graphic Design
      categoryMatch = 
        project.category === 'UI/UX DESIGN' || 
        project.category === 'Graphic Design' ||
        project.category.includes('Graphic Design');
    } else {
      // Regular category matching
      categoryMatch = project.category.toLowerCase().includes(selectedCategory.toLowerCase());
    }

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
    if (typeof window !== "undefined" && (window as any).showPreloader) {
      (window as any).showPreloader();
    }

    setSelectedCategory(newCategory);
    setIsDropdownOpen(false);
    const params = new URLSearchParams();
    if (newCategory !== 'All Projects') {
      // Use shorter URL alias if available
      const urlAlias = getShortUrlAlias(newCategory);
      if (urlAlias) {
        params.set('category', urlAlias);
      } else {
        params.set('category', newCategory);
      }
    }

    // Use Next.js router for navigation
    router.push(`/projects${params.toString() ? '?' + params.toString() : ''}`);
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
          <Image src="/assets/images/star-2.png" alt="Star" width={30} height={30} /> {
            selectedCategory === 'All Projects' 
              ? selectedCategory 
              : selectedCategory === 'DESIGN' || selectedCategory === 'design'
              ? 'Design Projects'
              : `${selectedCategory} Projects`
          } <Image src="/assets/images/star-2.png" alt="Star" width={30} height={30} />
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
              showWordPress={wordpress}
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
                showWordPress={wordpress}
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
                    showWordPress={wordpress}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Button */}
        {!hideFilter && (
          <div className="filter-button-container">
            <button
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="filter-button"
              disabled={isFiltering}
            >
              <Image src="/assets/images/filter.svg" alt="Filter" width={24} height={24} />
            </button>

            <div
              ref={dropdownRef}
              className={`filter-dropdown ${isDropdownOpen ? 'visible' : 'hidden'}`}
            >
              {categories.map((category) => {
                const params = new URLSearchParams();
                if (category !== 'All Projects') {
                  // Use shorter URL alias if available
                  const urlAlias = getShortUrlAlias(category);
                  if (urlAlias) {
                    params.set('category', urlAlias);
                  } else {
                    params.set('category', category);
                  }
                }
                const href = `/projects${params.toString() ? '?' + params.toString() : ''}`;
                
                return (
                  <a
                    key={category}
                    href={href}
                    className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryChange(category);
                    }}
                  >
                    {category}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
