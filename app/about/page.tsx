import { Metadata } from "next";
import ServicesIcon from "../components/ServicesIcon";
import ResumeBox from "../components/ResumeBox";
import ProfileContactBox from "../components/ProfileContactBox";
import ContactBox from "../components/ContactBox";
import Link from "next/link";
import Image from "next/image";

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
    // "qallie.vercel.app",
    "About Japheth Jerry",
    "Software Engineer Background",
    "Web Developer Experience",
    "UI/UX Designer",
    "Graphic Designer",
    "Education"
  ],
  openGraph: {
    title: "About Japheth Jerry - Software Engineer & Cyber Security Specialist",
    description: "Software Engineer with expertise in Web and Mobile Application Development, UI/UX Design & Graphic Design and Cyber Security Specialist. ",
    images: [
      {
        url: "/assets/images/me.avif",
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
              <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} priority />
              <div className="image-inner">
                <Image
                  src="/assets/images/me.avif"
                  alt="About Me"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="about-details" data-aos="zoom-in">
            <h2 className="section-heading" data-aos="fade-up">
              <Image src="/assets/images/star-2.png" alt="Star" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', display: 'inline-block' }} />
              Self-summary
              <Image src="/assets/images/star-2.png" alt="Star" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', display: 'inline-block' }} />
            </h2>
            <article className="about-details-inner shadow-box" itemScope itemType="https://schema.org/Person">
              <Image src="/assets/images/icon2.png" alt="Star" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
              <h1 itemProp="name">Japheth Oluwatimileyin Jerry</h1>
              <p itemProp="description">
                <strong itemProp="jobTitle">Computer Software Engineer</strong> with expertise spanning Web and Mobile Application Development, UI/UX Design, and Graphic Design. Experience covers a diverse range of projects across various fields and industries and <strong itemProp="jobTitle">Cyber Security Specialist</strong>.
              </p>
            </article>
          </div>
        </div>
        <div className="row mt-24">
          <div className="col-md-6 mb-24" data-aos="zoom-in">
            <div className="about-edc-exp about-experience shadow-box">
              {/* <Link href="/resume" className="overlay-link" /> */}
              <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
              <h3>EXPERIENCE</h3>
              <ul style={{ display: 'inline-block' }}>
                <li>
                  <p className="date">2025 - Present</p>
                  <h2>Software Engineering Consultant / Dir. of Finance</h2>
                  <p className="type">J3 Global Ventures Limited</p>
                </li>
                <li>
                  <p className="date">2025 - Present</p>
                  <h2>Software Engineer</h2>
                  <p className="type">Popkup</p>
                </li>
              </ul>
              <Link href="/resume" className="about-btn" style={{ marginLeft: '200px' }}>
                <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-24" data-aos="zoom-in">
            <div className="about-edc-exp about-education shadow-box">
              <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
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
        <div className="row ">
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
