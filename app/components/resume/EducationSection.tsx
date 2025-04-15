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
          {/* {education.details && <p className="details">{education.details}</p>}
          {education.coursework && (
            <div className="coursework">
              <h6>Curriculum:</h6>
              <ul>
                {education.coursework.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          )}
          {education.technicalSkills && (
            <div className="technical-skills">
              <h6>Technical Skills Gained:</h6>
              <ul>
                {education.technicalSkills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
          {education.achievements && (
            <div className="achievements">
              <h6>Achievements:</h6>
              <ul>
                {education.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default EducationSection; 