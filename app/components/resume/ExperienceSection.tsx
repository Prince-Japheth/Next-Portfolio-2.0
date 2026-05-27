import React from 'react';
import { experienceData } from '../../data/resumeData';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <div className="resume-edc-exp resume-experience">
      <h2 data-aos="fade-up">Experience</h2>
      {experienceData.map((experience, index) => (
        <div className="resume-edc-exp-item" key={index} data-aos="zoom-in">
          <h4>{experience.period}</h4>
          <h3>{experience.title}</h3> <span>{experience.employmentType}</span>
          <br />
          <br />
          <a href={experience.companyUrl} target="_blank">
            <Image src={experience.companyIcon} alt="Company Website" className="company-icon" width={30} height={30} unoptimized />
            <h5>{experience.companyName}</h5> <Image src="https://cdn-icons-png.flaticon.com/128/1017/1017466.png" alt="Company Website" className="link-icon" width={14} height={14} unoptimized />
          </a>
          <p>
            {experience.responsibilities.map((responsibility, i) => (
              <React.Fragment key={i}>
                • {responsibility}<br />
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection; 