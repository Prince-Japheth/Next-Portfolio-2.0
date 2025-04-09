import React from 'react';
import SkillCard from "../SkillCard";
import { skills, toolsAndProductivity } from '../../data/resumeData';

const SkillsSection = () => {
  return (
    <section className="skill d-md-none" data-aos="zoom-in">
      <ul className="skills2-list">
        {/* Technologies */}
        <li className="content-card">
          <h4 className="h4 skills-title" data-aos="zoom-in">Some Technologies I Love to Build With</h4>
          <div className="skills2-content-box">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                iconSrc={skill.iconSrc}
                iconAlt={skill.iconAlt}
                delay={index * 50}
                tooltipText={skill.tooltipText}
              />
            ))}
          </div>
        </li>
        <br /><br /><br /><br /><br /><br />
        {/* Tools & Productivity */}
        <li className="content-card">
          <h4 className="h4 skills-title" data-aos="zoom-in">Tools &amp; Productivity</h4>
          <div className="skills2-content-box">
            {toolsAndProductivity.map((tool, index) => (
              <SkillCard
                key={index}
                iconSrc={tool.iconSrc}
                iconAlt={tool.iconAlt}
                delay={index * 50}
                tooltipText={tool.tooltipText}
              />
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default SkillsSection; 