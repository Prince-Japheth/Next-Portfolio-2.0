"use client";

import Link from "next/link";

interface ContactBoxProps {
  className?: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ className = "col-md-6" }) => {
  return (
    <div className={className} data-aos="zoom-in">
      <div className="about-contact-box info-box shadow-box">
        <Link href="/contact" className="overlay-link" />
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <img src="/assets/images/icon2.png" alt="Icon" className="star-icon" />
        <h1>
          Let's <br />
          work <span>together.</span>
        </h1>
        <Link href="/contact" className="about-btn">
          <img src="/assets/images/icon.svg" alt="Button" />
        </Link>
      </div>
    </div>
  );
};

export default ContactBox;
