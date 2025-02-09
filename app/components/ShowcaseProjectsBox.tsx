"use client";

import Link from "next/link";

const ShowcaseProjectsBox = () => {
  return (
    <div data-aos="zoom-in">
      <div className="about-profile-box info-box shadow-box h-full">
        <Link href="/projects" legacyBehavior>
          <a className="overlay-link" />
        </Link>
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <img src="/assets/images/my-works.png" alt="My projects" />
        <div className="d-flex align-items-center justify-content-between">
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
  );
};

export default ShowcaseProjectsBox;
