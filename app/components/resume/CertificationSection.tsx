import React from 'react';
import { certificationData } from '../../data/resumeData';

const CertificationSection = () => {
  return (
    <div className="skills-wrap awards-wrap">
      <h2 data-aos="fade-up">Certifications</h2>
      <div className="d-grid skill-items gap-24 flex-wrap">
        {certificationData.map((certification, index) => (
          <div className="skill-item" key={index} data-aos="zoom-in">
            <span className="percent">{certification.date}</span>
            <h3 className="name">{certification.title}</h3>
            <p>{certification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSection; 