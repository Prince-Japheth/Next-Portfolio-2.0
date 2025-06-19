"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projectData } from "../data/projects";

const ShowcaseProjectsBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectData.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  // Ensure the image path is always absolute
  const getImagePath = (img: string) =>
    img.startsWith("/") ? img : img.replace(/^\./, "");

  return (
    <>
      <style jsx>{`
        .project-shocase-img {
          height: 130px;
          width: auto;
          border-radius: 15px;
        }
        @media (max-width: 767px) {
          .project-shocase-img {
            height: auto;
            max-width: 100%;
            width: 100%;
            object-fit: contain;
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
      <div data-aos="zoom-in">
        <div className="about-profile-box info-box shadow-box h-full">
          <Link href="/projects" legacyBehavior>
            <a className="overlay-link" />
          </Link>
          <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
          <img
            src={getImagePath(projectData[currentIndex].image)}
            alt={projectData[currentIndex].title}
            className="project-shocase-img"
          />
          <div className="d-flex align-items-center justify-content-between project-showcase-info">
            <div className="infos">
              <h4>SHOWCASE</h4>
              <h1>Projects</h1>
            </div>
            <Link href="#" legacyBehavior>
              <a className="about-btn">
                <img src="/assets/images/icon.svg" alt="Button" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowcaseProjectsBox;
