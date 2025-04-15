import React from 'react';
import { educationData } from '../../data/resumeData';

const EducationSection = () => {
  return (
    <div className="resume-edc-exp resume-education">
      <h2 data-aos="fade-up">Education</h2>
      {educationData.map((education, index) => (
        <div className="resume-edc-exp-item" key={index} data-aos="zoom-in">
          <h4>{education.period}</h4>
          <h3>{education.title}</h3>
          <br />
          <h5>{education.school}</h5>
          {education.details && <p>{education.details}</p>}
        </div>
      ))}
    </div>
  );
};

export default EducationSection; 