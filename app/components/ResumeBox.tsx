"use client";

import Link from "next/link";
import Image from "next/image";

const ResumeBox = () => {
  return (
    <div data-aos="zoom-in">
      <div className="about-blog-box info-box shadow-box h-full">
        <Link href="/resume" className="overlay-link" />
        <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
        <Image src="/assets/images/sign.png" alt="Sign" width={180} height={100} style={{ height: "auto" }} />
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
