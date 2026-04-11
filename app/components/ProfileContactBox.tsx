"use client";

import React from 'react';
import Link from 'next/link';

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
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <div className="inner-profile-icons shadow-box">
          {showGithub && (
            <a href="https://github.com/Prince-Japheth" target="_blank" rel="noopener noreferrer">
              <i className="iconoir-github" />
            </a>
          )}
          {showLinkedin && (
            <a href="https://linkedin.com/in/japheth-jerry-34a513274" target="_blank" rel="noopener noreferrer">
              <i className="iconoir-linkedin" />
            </a>
          )}
          {showMail && (
            <a href={`mailto:${CONTACT_EMAILS.PRIMARY}`}>
              <i className="iconoir-mail" />
            </a>
          )}
          {showInstagram && (
            <a href="https://www.instagram.com/_prince_yafet_/" target="_blank" rel="noopener noreferrer">
              <i className="iconoir-instagram" />
            </a>
          )}
          {showWhatsapp && (
            <WhatsAppLink>
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
            <img src="/assets/images/icon.svg" alt="Button" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileContactBox;
