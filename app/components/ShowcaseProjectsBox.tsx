"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projectData } from "../data/projects";

const ShowcaseProjectsBox = () => {
  // Titles for which images should not be shown
  const hideImageTitles = [
    "Topix",
    "Lincoln University College Result Portal",
    "Branding Co",
    "Inride Mobile App",
    "Education Alliance Consulting",
    "Jewelry Store Template",
    "Care Supply",
  ];

  // Only show projects up to and including 'XTM Launch Website Redesign'
  const lastProjectTitle = "XTM Launch Website Redesign";
  const lastIndex = projectData.findIndex(p => p.title === lastProjectTitle);
  // Filter out projects that should be hidden and graphic design projects
  const showcaseProjects = (lastIndex !== -1 ? projectData.slice(0, lastIndex + 1) : projectData)
    .filter(p => !hideImageTitles.includes(p.title) && p.category !== 'Graphic Design' && !p.category.includes('Graphic Design'));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, [showcaseProjects.length]);

  // Ensure the image path is always absolute
  const getImagePath = (img: string) =>
    img.startsWith("/") ? img : img.replace(/^\./, "");

  const currentProject = showcaseProjects[currentIndex];

  return (
    <>
      <style jsx>{`
        .parentofshowcaseprojectbox {
          flex: 1 !important;
        }
        .project-shocase-img-wrap {
          position: relative;
          width: 100%;
          height: 130px;
          border-radius: 15px;
          overflow: hidden;
          display: block;
        }
        .project-shocase-img {
          object-fit: cover;
        }
        @media (max-width: 767px) {
          .project-shocase-img-wrap {
            height: 110px;
            max-width: 100%;
            width: 100%;
            border-radius: 20px;
          }
          .about-profile-box {
            padding: 0.5rem;
          }
          .project-showcase-info {
            padding: 0 10px;
          }
        }
      `}</style>
      <div data-aos="zoom-in" className="parentofshowcaseprojectbox">
        <div className="about-profile-box info-box shadow-box h-full">
          <Link href="/projects" className="overlay-link" />
          <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
          <div className="project-shocase-img-wrap">
            <Image
              src={getImagePath(currentProject.image)}
              alt={currentProject.title}
              className="project-shocase-img"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 767px) 100vw, 220px"
              priority
            />
          </div>
          <div className="d-flex align-items-center justify-content-between project-showcase-info">
            <div className="infos">
              <h4>SHOWCASE</h4>
              <h1>Projects</h1>
            </div>
            <Link href="#" className="about-btn">
              <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowcaseProjectsBox;
