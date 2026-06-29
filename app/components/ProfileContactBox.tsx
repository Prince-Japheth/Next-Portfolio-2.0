"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProfileContactBoxProps {
  showGithub?: boolean;
  showLinkedin?: boolean;
  showMail?: boolean;
  showInstagram?: boolean;
  showWhatsapp?: boolean;
  className?: string;
}

import WhatsAppLink from './shared/WhatsAppLink';
import { CONTACT_EMAILS } from '@/lib/constants/contact';

const ProfileContactBox: React.FC<ProfileContactBoxProps> = ({
  showGithub = true,
  showLinkedin = true,
  showMail = true,
  showInstagram = true,
  showWhatsapp = true,
  className = "",
}) => {
  return (
    <div data-aos="zoom-in" className={className}>
      <div className="about-profile-box info-box shadow-box h-full">
        <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
        <div className="inner-profile-icons shadow-box">
          {showGithub && (
            <a href="https://github.com/Prince-Japheth" target="_blank" rel="me noopener noreferrer" aria-label="GitHub Profile" title="GitHub Profile">
              <i className="iconoir-github" />
            </a>
          )}
          {showLinkedin && (
            <a href="https://www.linkedin.com/in/japheth-jerry-34a513274/" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn Profile">
              <i className="iconoir-linkedin" />
            </a>
          )}
          {showMail && (
            <a href={`mailto:${CONTACT_EMAILS.PRIMARY}`} aria-label="Send an Email" title="Send an Email">
              <i className="iconoir-mail" />
            </a>
          )}
          {showInstagram && (
            <a href="https://www.instagram.com/_prince_yafet_/" target="_blank" rel="me noopener noreferrer" aria-label="Instagram Profile" title="Instagram Profile">
              <i className="iconoir-instagram" />
            </a>
          )}
          {showWhatsapp && (
            <WhatsAppLink aria-label="WhatsApp Contact" title="WhatsApp Contact">
              <i className="iconoir-whatsapp" />
            </WhatsAppLink>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>Stay with me</h4>
            <h1>Profiles &amp; Contacts</h1>
          </div>
          <Link href="/contact" className="about-btn">
            <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileContactBox;
