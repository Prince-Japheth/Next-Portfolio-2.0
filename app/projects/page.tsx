"use client";

import React, { useState, useRef, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';

const projectData = [
  {
    title: 'My Portfolio Website',
    category: 'Web Development',
    tools: 'ReactJs + NextJs, Javascript, jQuery, CSS, Bootstrap',
    image: './assets/images/project_0.png',
    link: 'https://yafetport.netlify.app',
  },
  {
    title: 'Lincoln Impact Foundation',
    category: 'Web Development',
    tools: 'Laravel, MySQL, JavaScript, jQuery, CSS, SASS, Bootstrap',
    image: './assets/images/project-4.png',
    link: 'https://lincolnfoundations.org',
  },
  {
    title: 'Topix',
    category: 'Web & Mobile Development',
    tools: 'PHP, MySQL, JavaScript, jQuery, React Native, Java, CSS, SASS, Bootstrap',
    image: './assets/images/project-42.jpg',
    link: 'https://topix.great-site.net/about',
  },
  {
    title: 'LaunchFundr',
    category: 'Web Development',
    tools: 'Astro & Tailwind Css',
    image: './assets/images/project-18.jpg',
    link: 'https://launchfundr.netlify.app/',
  },
  {
    title: 'Computer Aided Instruction Studies Dashboard',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-16.jpg',
    link: 'https://www.figma.com/design/MG9mnjpONtzH7MAdzaQyFx/Computer-aided-instruction-studies?node-id=0-1&t=h4rMUIGZnjfrkUor-1',
  },
  {
    title: 'Sunny Apartments',
    category: 'Graphic Design - Logo Design & Branding',
    tools: '',
    image: './assets/images/project-19.jpg',
    link: './assets/images/project-19.jpg',
  },
  {
    title: 'Serene',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-2.png',
    link: 'https://www.figma.com/design/nngiN0ih1qbsYJrYoYQZCf/Serene?node-id=0-1&t=RRlBYhrH2nsaBh0s-1',
  },
  {
    title: 'Branding Co',
    category: 'Web Development',
    tools: 'Html, Css & JavaScript',
    image: './assets/images/project-3.jpg',
    link: 'https://brandingcodemo.netlify.app',
  },
  {
    title: 'KNFT',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-13.jpg',
    link: 'https://www.figma.com/design/DD3GZw5AJQL16cm4zP34ZN/KNFT-NFT?node-id=0-1&t=AkQ2VHbWYizepKYq-1',
  },
  {
    title: 'Safekan Technovation Branding',
    category: 'Graphic Design - Branding',
    tools: 'Photoshop',
    image: './assets/images/project-27.jpg',
    link: './assets/images/project-27.jpg',
  },
  {
    title: 'Inride Landing Page',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-17.jpg',
    link: 'https://www.figma.com/design/eiAejMk7W3ImOKtxN3X8Mn/InRide?node-id=0-1&t=60sogAbw4rpcPWt0-1',
  },
  {
    title: 'Print Xpert Logo Redesign',
    category: 'Graphic Design - Logo Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-36.jpg',
    link: './assets/images/project-36.jpg',
  },
  {
    title: 'Education Alliance Consulting',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-10.jpg',
    link: 'https://www.figma.com/design/pLJIvtEcKIab1RL45jznjP/EAC-Web-View?node-id=0-1&t=A1XsGavjeupOL5E3-1',
  },
  {
    title: 'Jasper Lewis Portfolio Website',
    category: 'Web Development',
    tools: 'Html, Css & JavaScript',
    image: './assets/images/project-5.png',
    link: 'https://hackwithjasper.netlify.app',
  },
  {
    title: 'Safekan',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-8.jpg',
    link: 'https://www.figma.com/design/lw77udFJZDMGxxWj5pfMeR/Safekan?node-id=0-1&t=uiZTK92NssgWgVQD-1',
  },
  {
    title: 'Jewelry Store Template',
    category: 'Web Development',
    tools: 'Html, Css & JavaScript',
    image: './assets/images/project-6.png',
    link: 'https://resincraft.netlify.app',
  },
  {
    title: 'Tech All',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-9.png',
    link: 'https://www.figma.com/design/DkSSkfRgPo6PY5cZhjqRJo/Tech-all?node-id=0-1&t=y6Zck4xjrsmRRpeA-1',
  },
  {
    title: 'Wedding Brochure',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-38.jpg',
    link: './assets/images/project-38.jpg',
  },
  {
    title: 'Body Station',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-11.jpg',
    link: 'https://www.figma.com/design/JX5E4COT6W35DAtFAJXnYm/Bodystation-Web-Design?node-id=0-298&t=cl5HmGrLsRANPd1A-1',
  },
  {
    title: 'XTM Launch Website Redesign',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-12.jpg',
    link: 'https://www.figma.com/design/SBNTluv91Bk0Zlv9s8n6Vh/XTM-Launch?m=auto&t=TTm4uRKuk2MPRXR7-6',
  },
  {
    title: 'Lincoln 2024 Hackathon Flyer',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-41.jpg',
    link: './assets/images/project-41.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Illustrator',
    image: './assets/images/project-23.jpg',
    link: './assets/images/project-23.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Adobe Illustrator',
    image: './assets/images/project-33.jpg',
    link: './assets/images/project-33.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-31.jpg',
    link: './assets/images/project-31.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-30.jpg',
    link: './assets/images/project-30.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-25.jpg',
    link: './assets/images/project-25.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-29.jpg',
    link: './assets/images/project-29.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-32.jpg',
    link: './assets/images/project-32.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Canva',
    image: './assets/images/project-34.jpg',
    link: './assets/images/project-34.jpg',
  },
  {
    title: 'Abiodun Best Pixels Logo',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-20.jpg',
    link: './assets/images/project-20.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Photoshop',
    image: './assets/images/project-22.jpg',
    link: './assets/images/project-22.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-24.jpg',
    link: './assets/images/project-24.jpg',
  },
  {
    title: 'Safekan Flyer',
    category: 'Graphic Design',
    tools: 'Canva',
    image: './assets/images/project-37.jpg',
    link: './assets/images/project-37.jpg',
  },
  {
    title: 'House Fellowship Mini Banner',
    category: 'Graphic Design',
    tools: 'CorelDRAW',
    image: './assets/images/project-40.jpg',
    link: './assets/images/project-40.jpg',
  },
  {
    title: 'XTM Launch Flyer',
    category: 'Graphic Design',
    tools: 'Canva',
    image: './assets/images/project-35.jpg',
    link: './assets/images/project-35.jpg',
  },
  {
    title: 'Care Supply',
    category: 'UI/UX DESIGN',
    tools: 'Figma',
    image: './assets/images/project-15.jpg',
    link: 'https://www.figma.com/design/yDM7HPRa1SFD42arqQoPEG/Care-Supply?node-id=0-1&t=ocUpr0ULdmZksTuA-1',
  },
];

const categories = [
  'All Projects',
  'Mobile Development',
  'Web Development',
  'UI/UX DESIGN',
  'Graphic Design'
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectData
    : projectData.filter(project => project.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Distribute projects based on category selection
  const { firstColumnProjects, secondColumnProjects } = React.useMemo(() => {
    if (selectedCategory === 'All Projects') {
      // For 'All Projects', show first 11 in first column
      return {
        firstColumnProjects: filteredProjects.slice(0, 13),
        secondColumnProjects: filteredProjects.slice(13)
      };
    } else {
      // For filtered categories, split evenly
      const midPoint = Math.ceil(filteredProjects.length / 2);
      return {
        firstColumnProjects: filteredProjects.slice(0, midPoint),
        secondColumnProjects: filteredProjects.slice(midPoint)
      };
    }
  }, [filteredProjects, selectedCategory]);

  // Handle click outside
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

  // Handle category change and scroll to top
  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src="./assets/images/star-2.png" alt="Star" /> All Projects <img src="./assets/images/star-2.png" alt="Star" />
        </h1>

        {/* Floating Filter Button */}
        <div className="filter-button-container">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="filter-button"
          >
            <img src="./assets/images/filter.svg" alt="Filter" style={{ width: '24px', height: '24px' }} />
          </button>

          {/* Dropdown Menu */}
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
              <img src="./assets/images/star-2.png" alt="Star" /> All Projects{" "}
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