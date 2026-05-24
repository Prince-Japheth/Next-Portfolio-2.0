'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectData } from '../data/projects';
import Browser from '../components/Browser';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);
  const [browserUrl, setBrowserUrl] = useState('');
  const [browserTitle, setBrowserTitle] = useState('');
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);

  const handleVisitProject = (e: React.MouseEvent, project: any) => {
    e.preventDefault();
    const isExternalLink = project.link.includes('play') || project.link.includes('figma') || project.link.includes('bondyt') || project.link.includes('frat') || project.link.includes('popkup') || project.link.includes('topix');
    
    if (isExternalLink || (typeof window !== 'undefined' && window.innerWidth <= 768)) {
      window.open(project.link, '_blank');
      return;
    }

    setBrowserUrl(project.link);
    setBrowserTitle(project.title);
    setIsBrowserOpen(true);
  };

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  const searchResults = projectData.filter(project => {
    if (!searchTerm.trim()) return false;
    const searchLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.category.toLowerCase().includes(searchLower) ||
      project.tools.toLowerCase().includes(searchLower) ||
      project.brief.toLowerCase().includes(searchLower)
    );
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newUrl = searchTerm.trim() 
      ? `/search?q=${encodeURIComponent(searchTerm.trim())}`
      : '/search';
    window.history.pushState({}, '', newUrl);
  };

  return (
    <section className="search-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <Image src="/assets/images/star-2.png" alt="Star" width={30} height={30} /> Search Results <Image src="/assets/images/star-2.png" alt="Star" width={30} height={30} />
        </h1>

        <div className="search-form-container" data-aos="fade-up">
          <form onSubmit={handleSearch} className="search-form">
            <div className="input-group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects, experience, skills, services..."
                className="form-control search-input"
              />
              <button type="submit" className="btn btn-primary search-btn">
                <i className="iconoir-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="search-results" data-aos="fade-up">
          {searchTerm.trim() ? (
            <>
              <div className="results-header">
                <h3>Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchTerm}"</h3>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="results-grid">
                  {searchResults.map((project, index) => (
                    <div key={index} className="result-card shadow-box">
                      <div className="result-header">
                        <span className="result-icon">📁</span>
                        <span className="result-type">Project</span>
                      </div>
                      <h4 className="result-title">{project.title}</h4>
                      <p className="result-description">{project.brief}</p>
                      
                      <div className="result-meta">
                        <span className="meta-item">Category: {project.category}</span>
                        <span className="meta-item">Tools: {project.tools}</span>
                      </div>
                      
                      <div className="result-actions">
                        <a 
                          href={project.link} 
                          className="btn btn-outline-primary btn-sm"
                          onClick={(e) => handleVisitProject(e, project)}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <div className="no-results-content">
                    <h3>No results found for "{searchTerm}"</h3>
                    <p>Try searching for different keywords or browse the categories below:</p>
                    <div className="suggested-searches">
                      <Link href="/search?q=react" className="btn btn-outline-primary">React</Link>
                      <Link href="/search?q=web development" className="btn btn-outline-primary">Web Development</Link>
                      <Link href="/search?q=mobile" className="btn btn-outline-primary">Mobile Development</Link>
                      <Link href="/search?q=design" className="btn btn-outline-primary">UI/UX Design</Link>
                      <Link href="/search?q=graphic" className="btn btn-outline-primary">Graphic Design</Link>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="search-intro">
              <h3>Search across my portfolio</h3>
              <p>Search for projects, experience, skills, services, and more to find what you're looking for.</p>
              <div className="search-categories">
                <div className="category-section">
                  <h4>Popular Searches</h4>
                  <div className="category-tags">
                    <Link href="/search?q=react" className="tag">React</Link>
                    <Link href="/search?q=next.js" className="tag">Next.js</Link>
                    <Link href="/search?q=mobile" className="tag">Mobile Development</Link>
                    <Link href="/search?q=web development" className="tag">Web Development</Link>
                    <Link href="/search?q=ui/ux" className="tag">UI/UX Design</Link>
                    <Link href="/search?q=graphic design" className="tag">Graphic Design</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Browser
        isOpen={isBrowserOpen}
        onClose={() => setIsBrowserOpen(false)}
        url={browserUrl}
        title={browserTitle}
      />
    </section>
  );
} 