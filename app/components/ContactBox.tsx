"use client";

import Link from "next/link";
import Image from "next/image";

interface ContactBoxProps {
  className?: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ className = "col-md-6" }) => {
  return (
    <div className={`${className} h-100`} data-aos="zoom-in">
      <style dangerouslySetInnerHTML={{__html: `
        .md-only-br {
          display: none;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .about-contact-box h1 {
            font-size: clamp(20px, 3.5vw, 26px) !important;
            line-height: 1.2 !important;
          }
          .md-only-br {
            display: block;
          }
        }
      `}} />
      <div className="about-contact-box info-box shadow-box h-100">
        <Link href="/contact" className="overlay-link" aria-label="Contact me" />
        <Image src="/assets/images/bg1.png" alt="" aria-hidden="true" className="bg-img" width={600} height={600} loading="lazy" fetchPriority="low" />
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
          connect <br className="md-only-br" /> <span>sometime.</span>
        </h1>
        <Link href="/contact" className="about-btn">
          <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default ContactBox;
