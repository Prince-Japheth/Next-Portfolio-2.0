"use client";

import Link from "next/link";
import Image from "next/image";

interface ContactBoxProps {
  className?: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ className = "col-md-6" }) => {
  return (
    <div className={className} data-aos="zoom-in">
      <div className="about-contact-box info-box shadow-box">
        <Link href="/contact" className="overlay-link" />
        <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
        <Image 
          src="/assets/images/icon2.png" 
          alt="Icon" 
          className="star-icon" 
          width={0} 
          height={0} 
          sizes="100vw" 
          style={{ width: 'auto', height: 'auto' }} 
        />
        <h1>
          Let's <br />
          connect <span>sometime.</span>
        </h1>
        <Link href="/contact" className="about-btn">
          <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default ContactBox;
