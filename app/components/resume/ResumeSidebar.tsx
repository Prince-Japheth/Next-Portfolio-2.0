import React from 'react';
import SkillCard from "../SkillCard";
import { skills, toolsAndProductivity } from '../../data/resumeData';

const ResumeSidebar = () => {
  return (
    <div className="resume-sidebar-wrap" data-aos="zoom-in">
      <div className="resume-sidebar text-center">
        <div className="shadow-box">
          <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
          <div className="img-box">
            <img src="./assets/images/me2.png" alt="About Me" />
          </div>
          <h2>Japheth Jerry</h2>
          <p><a href="mailto:princejaphethjj@gmail.com">princejaphethjj@gmail.com</a></p>
          <ul className="social-links d-flex justify-content-center">
            <li>
              <a href="https://github.com/Prince-Japheth" target="_blank">
                <i className="iconoir-github" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/japheth-jerry-34a513274" target="_blank">
                <i className="iconoir-linkedin" />
              </a>
            </li>
            <li>
              <a href="mailto:princejaphethjj@gmail.com">
                <i className="iconoir-mail" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_prince_yafet_/" target="_blank">
                <i className="iconoir-instagram" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/c/2348034766310" target="_blank">
                <i className="iconoir-whatsapp" />
              </a>
            </li>
          </ul>
          <a href="/assets/Japheth-Jerry-Cv.pdf" className="theme-btn" download="Japheth-Jerry-Cv.pdf">Download Resume</a>
          <br /><br /><br />
          <a href="/contact" className="theme-btn">Contact Me</a>
        </div>
      </div>
      
      {/* Skills Section moved to sidebar - desktop only */}
      <div className="skills-section mt-5 d-none d-md-block" data-aos="zoom-in">
        <div className="shadow-box text-center p-3 py-4">
          <h4 className="h4 skills-title" data-aos="zoom-in">Technologies I Love to Build With</h4>
          <div className="skills2-content-box ps-2">
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
          
          <h4 className="h4 skills-title mt-5" data-aos="zoom-in">Tools &amp; Productivity</h4>
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
        </div>
      </div>
    </div>
  );
};

export default ResumeSidebar; 