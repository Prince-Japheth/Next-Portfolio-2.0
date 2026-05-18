"use client";

import Link from "next/link";
import Image from "next/image";

const ResumeBox = () => {
  return (
    <div data-aos="zoom-in">
      <div className="about-blog-box info-box shadow-box h-full">
        <Link href="/resume" className="overlay-link" />
        <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={800} height={800} />
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="120" viewBox="0 0 24 24" fill="none" style={{ height: "auto", maxWidth: "100%" }}>
          <path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="#ffffff" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M14.5 4.5v2c0 1.1.9 2 2 2h2" stroke="#ffffff" strokeWidth="0.7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M7.48 15.49c-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48-.49-.01-2.26-.84-2.79-2.48Z" stroke="#ffffff" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>more about me</h4>
            <h1>Resume</h1>
          </div>
          <Link href="/resume" className="about-btn">
            <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeBox;
