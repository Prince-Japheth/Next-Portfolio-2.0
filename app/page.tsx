import { Metadata } from "next";
import ServicesIcon from "./components/ServicesIcon";
import ResumeBox from "./components/ResumeBox";
import ShowcaseProjectsBox from "./components/ShowcaseProjectsBox";
import ProfileContactBox from "./components/ProfileContactBox";
import ContactBox from "./components/ContactBox";
import ClientStatsBox from "./components/ClientStatsBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Japheth Jerry — Full Stack Software Engineer | React, Next.js, TypeScript",
  description: "Co-Founder & CTO at Qallie, Software Engineer and Uprising CyberSecurity Profesional. Professional Full Stack Software Engineer and Uprising Cybersecurity Professional. Specializing in React, Next.js, TypeScript, and secure scalable web apps.",
  keywords: [
    "Japheth Jerry", 
    "Software Engineer", 
    "Software Engineer Nigeria", 
    "React Developer", 
    "Next.js Developer", 
    "TypeScript Developer", 
    "Cybersecurity Professional", 
    "MERN Stack Developer", 
    "Laravel Developer", 
    "UI/UX Developer", 
    "Mobile App Developer Nigeria", 
    "Hire Software Engineer", 
    "Web Development Services", 
    "Secure Web Developer", 
    "Remote React Developer", 
    "Nigeria-based Web Developer", 
    "Professional Portfolio Web Developer", 
    "Responsive Frontend Developer", 
    "Secure App Development", 
    "Co-founder & CTO Qallie", 
    "Qallie.online"
  ],
  openGraph: {
    title: "Japheth Jerry — Full Stack Software Engineer | React, Next.js, TypeScript",
    description: "Co-Founder & CTO at Qallie | Software Engineer and Uprising CyberSecurity Profesional | Full-stack development, mobile apps, secure web solutions.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Portfolio_OG.png",
        width: 1200,
        height: 630,
        alt: "Japheth Jerry - Software Engineer",
      }
    ],
    url: "https://japhethjerry.space",
    type: "website"
  },
  alternates: {
    canonical: "https://japhethjerry.space"
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Jerry — Full Stack Software Engineer",
    description: "Co-Founder & CTO at Qallie | Software Engineer and Uprising CyberSecurity Profesional | Full-stack development, mobile apps, secure web solutions.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/c/c2/Portfolio_OG.png"],
    creator: "@Yafet_Tim"
  }
};

export default function Home() {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                <div className="img-box">
                  <div className="profile-image-container">
                    <img src="/assets/images/me2.png" alt="About Me Alternate" />
                    <img src="/assets/images/me.png" alt="About Me" />
                  </div>
                </div>
                <div className="infos">
                  <h4>Computer Software Engineer</h4>
                  <h1>Japheth Jerry.</h1>
                  <p>Computer Software Engineer & Uprising Cybersecurity Professional. Co-founder of Qallie.</p>
                  <Link href="/about" className="about-btn">
                    <img src="/assets/images/icon.svg" alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="about-resume-wrap d-flex flex-1 flex-column">
                <div data-aos="zoom-in">
                  <div className="banner shadow-box">
                    <div className="marquee">
                      <div>
                        <span aria-label="Available for work opportunities">
                          OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" />
                          OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" />
                          OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" />
                          OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" />
                          OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" />
                          OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gx-row d-flex gap-24 h-full">
                  <ServicesIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-24">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex gap-24">
                <ResumeBox />
                <ProfileContactBox
                  showGithub={true}
                  showLinkedin={true}
                  showMail={true}
                  showInstagram={true}
                  showWhatsapp={true}
                  className="flex-1"
                />
                <ShowcaseProjectsBox />
              </div>
            </div>
          </div>
          <div className="row mt-24">
            <ClientStatsBox />
            <ContactBox className="col-md-6" />
          </div>
        </div>
      </section>
    </>
  );
}