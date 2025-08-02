import React from 'react';
import { Metadata } from "next";
import ResumeSidebar from '../components/resume/ResumeSidebar';
import AboutSection from '../components/resume/AboutSection';
import EducationSection from '../components/resume/EducationSection';
import ExperienceSection from '../components/resume/ExperienceSection';
import CertificationSection from '../components/resume/CertificationSection';
import SkillsSection from '../components/resume/SkillsSection';

export const metadata: Metadata = {
  title: "Resume",
  description: "View Japheth Jerry's professional resume, work experience, education, skills, and certifications. Software Engineer with expertise in React, Next.js, TypeScript, and web development.",
  keywords: ["Japheth Jerry Resume", "Software Engineer Resume", "Web Developer CV", "Work Experience", "Skills", "Certifications", "Education"],
  openGraph: {
    title: "Japheth Jerry - Professional Resume",
    description: "View my professional resume, work experience, education, skills, and certifications.",
    images: [
      {
        url: "/assets/images/project_0.png",
        width: 1200,
        height: 630,
        alt: "Japheth Jerry - Resume",
      },
    ],
  },
  alternates: {
    canonical: "https://japhethjerry.space/resume",
  },
};

export default function Resume() {
  return (
    <section className="resume-area">
      <div className="container">
        <div className="gx-row d-flex">
          <ResumeSidebar />
          <div className="resume-content flex-1">
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <CertificationSection />
            {/* <SkillsSection /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

