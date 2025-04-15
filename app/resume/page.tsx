import React from 'react';
import ResumeSidebar from '../components/resume/ResumeSidebar';
import AboutSection from '../components/resume/AboutSection';
import EducationSection from '../components/resume/EducationSection';
import ExperienceSection from '../components/resume/ExperienceSection';
import CertificationSection from '../components/resume/CertificationSection';
import SkillsSection from '../components/resume/SkillsSection';

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

