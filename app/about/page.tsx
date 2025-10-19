import { Metadata } from "next";
import ServicesIcon from "../components/ServicesIcon";
import ResumeBox from "../components/ResumeBox";
import ProfileContactBox from "../components/ProfileContactBox";
import ContactBox from "../components/ContactBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Japheth Jerry",
  description: "Learn more about Japheth Jerry - Computer Software Engineer with expertise in Web and Mobile Application Development, UI/UX Design & Graphic Design. View my experience and education background.",
  keywords: [
    "Japheth",
    "Jerry",
    "Timileyin",
    "Oluwatimileyin",
    "Japheth Oluwatimileyin Jerry",
    "Japheth Jerry", 
    "Qallie",
    "Co-Founder of Qallie",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full Stack Developer",
    "Cybersecurity Professional",
    "MERN Stack Developer",
    "Laravel Developer",
    "UI/UX Developer",
    "Mobile App Developer",
    "Hire Software Engineer",
    "Web Development Services",
    "Secure Web Developer",
    "Remote React Developer",
    "Web Developer",
    "Professional Portfolio Web Developer",
    "Responsive Frontend Developer",
    "Secure App Development",
    "Co-founder & CTO Qallie",
    "Qallie.online",
    "About Japheth Jerry",
    "Software Engineer Background",
    "Web Developer Experience",
    "UI/UX Designer",
    "Graphic Designer",
    "Education"
  ],
  openGraph: {
    title: "About Japheth Jerry - Software Engineer & Designer",
    description: "Co-Founder and CTO of Qallie, Computer Software Engineer, and Uprising Cybersecurity Professional with expertise in Web and Mobile Application Development, UI/UX Design & Graphic Design. View my experience and education.",
    images: [
      {
        url: "/assets/images/me2.png",
        width: 400,
        height: 400,
        alt: "Japheth Jerry - About Me",
      },
    ],
  },
  alternates: {
    canonical: "https://japhethjerry.space/about",
  },
};

export default function About() {
  return (
    <section className="about-area">
      <div className="container">
        <div className="d-flex about-me-wrap align-items-start gap-24">
          <div data-aos="zoom-in">
            <div className="about-image-box shadow-box">
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <div className="image-inner">
                <img src="./assets/images/me2.png" alt="About Me" />
              </div>
            </div>
          </div>
          <div className="about-details" data-aos="zoom-in">
            <h1 className="section-heading" data-aos="fade-up"><img src="./assets/images/star-2.png" alt="Star" />
              Self-summary <img src="./assets/images/star-2.png" alt="Star" /></h1>
            <div className="about-details-inner shadow-box">
              <img src="./assets/images/icon2.png" alt="Star" />
              <h1>Japheth Oluwatimileyin Jerry</h1>
              <p>
                Computer Software Engineer, Co-Founder &amp; CTO of Qallie, and an emerging cybersecurity professional. With expertise spanning Web and Mobile Application Development, UI/UX Design, and Graphic Design. Experience covers a diverse range of projects across various fields and industries.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-24">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-edc-exp about-experience shadow-box">
              {/* <Link href="/resume" className="overlay-link" /> */}
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <h3>EXPERIENCE</h3>
              <ul style={{ display: 'inline-block' }}>
                <li>
                  <p className="date">2025 - Present</p>
                  <h2>Co-Founder & CTO</h2>
                  <p className="type">Qallie</p>
                </li>
                <li>
                  <p className="date">2025 - Present</p>
                  <h2>Software Engineer</h2>
                  <p className="type">Popkup</p>
                </li>
              </ul>
              <Link href="/resume" className="about-btn" style={{ marginLeft: '200px' }}>
                <img src="./assets/images/icon.svg" alt="Button" />
              </Link>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-edc-exp about-education shadow-box">
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <h3>EDUCATION</h3>
              <ul>
                <li>
                  <p className="date">2023 - 2025</p>
                  <h2>Associate Degree in Software Engineering</h2>
                  <p className="type">Lincoln University College</p>
                </li>
                <li>
                  <p className="date">2022</p>
                  <h2>Professional Graphic Design Course</h2>
                  <p className="type">Print Xpert</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-24">
          <div className="col-md-12">
            <div className="d-flex profile-contact-resume-wrap gap-24 justify-content-between">
              <ServicesIcon />

              <ResumeBox />
              <div className="d-none d-lg-flex">
                <ProfileContactBox
                  showGithub={true}
                  showLinkedin={false}
                  showMail={true}
                  showInstagram={true}
                  showWhatsapp={false}
                  className="flex-1"
                />
              </div>
              <div className="d-flex d-lg-none">
                <ProfileContactBox
                  showGithub={true}
                  showLinkedin={true}
                  showMail={true}
                  showInstagram={true}
                  showWhatsapp={true}
                  className="flex-1"
                />
              </div>
              <div className="d-block d-md-none">
                <ContactBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
