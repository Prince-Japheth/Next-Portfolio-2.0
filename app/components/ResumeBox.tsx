"use client";

import Link from "next/link";

const ResumeBox = () => {
  return (
    <div data-aos="zoom-in">
      <div className="about-blog-box info-box shadow-box h-full">
        <Link href="/resume" legacyBehavior>
          <a className="overlay-link" />
        </Link>
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <img src="/assets/images/sign.png" alt="Sign" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>more about me</h4>
            <h1>Resume</h1>
          </div>
          <Link href="/resume" legacyBehavior>
            <a className="about-btn">
              <img src="/assets/images/icon.svg" alt="Button" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeBox;
