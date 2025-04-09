import SkillCard from "../components/SkillCard";

const skills = [
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/3291/3291670.png",
    iconAlt: "HTML5 logo",
    tooltipText: "HTML",
  },
  {
    iconSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/2048px-Official_CSS_Logo.svg.png",
    iconAlt: "CSS3 logo",
    tooltipText: "CSS & SCSS",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968358.png",
    iconAlt: "SASS logo",
    tooltipText: "SASS",
  },
  {
    iconSrc: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    iconAlt: "Bootstrap logo",
    tooltipText: "Bootstrap & Reactstrap",
  },
  {
    iconSrc: "https://www.cdnlogo.com/logos/t/58/tailwindcss.svg",
    iconAlt: "Tailwind CSS logo",
    tooltipText: "Tailwind CSS",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    iconAlt: "JavaScript logo",
    tooltipText: "JavaScript",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    iconAlt: "TypeScript logo",
    tooltipText: "TypeScript",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png",
    iconAlt: "Node.js logo",
    tooltipText: "Node.js",
  },
  {
    iconSrc: "https://cdn.iconscout.com/icon/free/png-256/free-jquery-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-3028907.png",
    iconAlt: "Jquery logo",
    tooltipText: "Jquery",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/10826/10826338.png",
    iconAlt: "React.js logo",
    tooltipText: "React.js",
  },
  {
    iconSrc: "https://www.datocms-assets.com/98835/1684410508-image-7.png",
    iconAlt: "Next.js logo",
    tooltipText: "Next.js",
  },
  {
    iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5KhCojo9MAD9u7-vbHjYYFzD69By9d-PWcw&s",
    iconAlt: "Astro logo",
    tooltipText: "Astro",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/919/919830.png",
    iconAlt: "PHP logo",
    tooltipText: "PHP",
  },
  {
    iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
    iconAlt: "Laravel logo",
    tooltipText: "Laravel",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png",
    iconAlt: "React Native logo",
    tooltipText: "React Native",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/3291/3291669.png",
    iconAlt: "Java logo",
    tooltipText: "Java",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
    iconAlt: "C++ logo",
    tooltipText: "C++",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/6132/6132221.png",
    iconAlt: "C# logo",
    tooltipText: "C#",
  },
  {
    iconSrc: "https://cdn.prod.website-files.com/6640cd28f51f13175e577c05/664e00a400e23f104ed2b6cd_3b3dd6e8-8a73-5879-84a9-a42d5b910c74.svg",
    iconAlt: "MongoDB logo",
    tooltipText: "MongoDB",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/9543/9543826.png",
    iconAlt: "MySQL logo",
    tooltipText: "SQL",
  },
];

const toolsAndProductivity = [
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/888/888867.png",
    iconAlt: "Microsoft Office logo",
    tooltipText: "Microsoft Office",
  },
  {
    iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bNFRNPDWOMqO7zuWEUNlktjE0eU-5q-UlQ&s",
    iconAlt: "Webflow logo",
    tooltipText: "Webflow",
  },
  {
    iconSrc: "https://cdn3d.iconscout.com/3d/free/thumb/free-visual-studio-code-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-python-java-c-coding-lang-pack-logos-icons-7578027.png",
    iconAlt: "VS Code logo",
    tooltipText: "VS Code",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/11895/11895137.png",
    iconAlt: "Command Line logo",
    tooltipText: "Command Line",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png",
    iconAlt: "Git logo",
    tooltipText: "Git",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/15484/15484297.png",
    iconAlt: "NPM logo",
    tooltipText: "NPM",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/16064/16064387.png",
    iconAlt: "CorelDRAW logo",
    tooltipText: "CorelDRAW Graphic Suites",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/5436/5436970.png",
    iconAlt: "Adobe Creative Cloud logo",
    tooltipText: "Adobe Creative Cloud",
  },
  {
    iconSrc: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
    iconAlt: "Figma logo",
    tooltipText: "Figma",
  },
  {
    iconSrc: "https://freepnglogo.com/images/all_img/1691829322canva-app-logo-png.png",
    iconAlt: "Canva logo",
    tooltipText: "Canva",
  },
];

export default function Resume() {
  return (
    <section className="resume-area">
      <div className="container">
        <div className="gx-row d-flex">
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
          </div>
          <div className="resume-content flex-1">
            <div className="resume-about" data-aos="zoom-in">
              <h2>About Me</h2>
              <p>I'm Japheth, a Computer Software Engineer; Full-Stack Web Developer, Cross-Platform
                Mobile App
                Developer, UI/UX Designer &amp; Graphic Designer with over 3 years of experience in building
                responsive, user-friendly
                applications. I specialize in creating both web and mobile solutions that seamlessly
                integrate functionality with innovative design, ensuring that every user interaction is
                intuitive and efficient.</p>
              <p> Throughout my career, I’ve developed a wide range of applications for industries such as
                education, e-commerce, and product innovation, focusing on crafting seamless user
                experiences and tackling complex technical challenges. My passion lies in merging
                creative design with technical expertise to deliver high-quality, scalable solutions
                that truly make a difference.</p>
            </div>
            <div className="resume-edc-exp resume-education">
              <h2 data-aos="fade-up">Education</h2>
              <div className="resume-edc-exp-item" data-aos="zoom-in">
                <h4>2022 - Present</h4>
                <h3>Bachelor Degree in Software Engineering &amp; Cybersecurity</h3>
                <br />
                <h5>Licnoln University College</h5>
              </div>
            </div>
            <div className="resume-edc-exp resume-experience">
              <h2 data-aos="fade-up">Experience</h2>
              <div className="resume-edc-exp-item" data-aos="zoom-in">
                <h4>2023 - Present</h4>
                <h3>Software Engineer</h3> <span>FULL-TIME</span>
                <br />
                <a href="https://spicodex.com/" target="_blank">
                  <img src="./assets/images/spicodex.png" alt="Company Website" className="company-icon" />
                  <h5>Spicodex</h5> <img src="https://cdn-icons-png.flaticon.com/128/1017/1017466.png" alt="Company Website" className="link-icon" />
                </a>
                <p>Developed cross-platform mobile applications using React Native, delivering
                  consistent performance on iOS and Android devices.
                  Integrated APIs and consumed endpoints to deliver dynamic and data-driven features.
                  Built and optimized responsive web applications using React.js, ensuring seamless
                  user experiences.
                  Collaborated with back-end teams to implement full-stack solutions using Node.js.
                  Conducted thorough testing and debugging to maintain high performance and usability
                  standards across platforms.</p>
              </div>
              <div className="resume-edc-exp-item" data-aos="zoom-in">
                <h4>2024 - Present</h4>
                <h3>Full-Stack Engineer</h3> <span>PART-TIME</span>
                <br />
                <a href="https://aquilacyber.netlify.app/" target="_blank">
                  <img src="./assets/images/aquila.png" alt="Company Website" className="company-icon" />
                  <h5>Aquila Cyber</h5> <img src="https://cdn-icons-png.flaticon.com/128/1017/1017466.png" alt="Company Website" className="link-icon" />
                </a>
                <p>Developed and maintained full-stack web applications using the MERN and XAMP stacks.
                  Built responsive and scalable user interfaces with React.js and ensured seamless
                  user experiences across platforms.
                  Designed and optimized server-side functionality using Node.js and PHP.
                  Integrated and managed databases using MongoDB and MySQL to handle dynamic and
                  data-driven features.
                  Conducted end-to-end testing and debugging to ensure performance, reliability, and
                  security of applications.
                  Collaborated with cross-functional teams to deliver high-quality solutions for
                  diverse client needs.</p>
              </div>
              <div className="resume-edc-exp-item" data-aos="zoom-in">
                <h4>2022 - 2024</h4>
                <h3>UI/UX and Web Developer</h3> <span>PART-TIME</span>
                <br />
                <a href="https://chinwubajeffrey.github.io/safekan/" target="_blank">
                  <img src="./assets/images/safekan.png" alt="Company Website" className="company-icon" />
                  <h5>Safekan</h5> <img src="https://cdn-icons-png.flaticon.com/128/1017/1017466.png" alt="Company Website" className="link-icon" />
                </a>
                <p>Designed and implemented website layouts and user interfaces based on client
                  requirements.
                  Conducted usability tests to ensure new features met quality assurance standards.
                  Developed and maintained the brand's official website using modern web technologies,
                  including HTML, CSS, Bootstrap, and JavaScript.
                  Collected and analyzed user feedback to identify areas for improvement and propose
                  new feature enhancements.</p>
              </div>
              <div className="resume-edc-exp-item" data-aos="zoom-in">
                <h4>2023 - 2024</h4>
                <h3>UI/UX and Graphic Designer</h3> <span>FULL-TIME</span>
                <br />
                <a href="https://weblaunchguys.online/" target="_blank">
                  <img src="./assets/images/xtm.png" alt="Company Website" className="company-icon" />
                  <h5>Web Launch Guys</h5> <img src="https://cdn-icons-png.flaticon.com/128/1017/1017466.png" alt="Company Website" className="link-icon" />
                </a>
                <p>Designed intuitive and visually engaging user interfaces for websites, web
                  applications, and mobile apps.
                  Developed user flows, wireframes, and prototypes to ensure seamless and accessible
                  user experiences.
                  Applied an iterative design process, incorporating user feedback and usability
                  testing to refine and enhance designs.
                  Researched emerging trends in graphic design software and techniques to stay
                  innovative.
                  Created logos, icons, infographics, and other visual assets to enhance online brand
                  presence.
                  Edited and retouched photos to improve quality and relevance for various design
                  projects.</p>
              </div>
            </div>
            <div className="skills-wrap awards-wrap">
              <h2 data-aos="fade-up">Certifications</h2>
              <div className="d-grid skill-items gap-24 flex-wrap">
                <div className="skill-item" data-aos="zoom-in">
                  <span className="percent">March 2021</span>
                  <h3 className="name">Print Xpert</h3>
                  <p>Professional Graphic Desiner Course</p>
                </div>
              </div>
            </div>
            <section className="skill">
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
                        delay={index * 50} // Calculating delay dynamically
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
                        delay={index * 50} // Calculating delay dynamically
                        tooltipText={tool.tooltipText}
                      />
                    ))}
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

