import { Metadata } from "next";
import ServicesIcon from "./components/ServicesIcon";
import ResumeBox from "./components/ResumeBox";
import ShowcaseProjectsBox from "./components/ShowcaseProjectsBox";
import ProfileContactBox from "./components/ProfileContactBox";
import ContactBox from "./components/ContactBox";
import ClientStatsBox from "./components/ClientStatsBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Japheth Jerry - Software Engineer & Cybersecurity Professional. Expert in React, Next.js, TypeScript, and full-stack development. View portfolio, projects, and hire for web development services.",
  keywords: ["Japheth Jerry", "Software Engineer", "Cybersecurity Professional", "React Developer", "Next.js Developer", "TypeScript Developer", "Web Developer", "Full Stack Developer", "Nigeria", "Hire Software Engineer", "Web Development Services"],
  openGraph: {
    title: "Japheth Jerry - Software Engineer & Cybersecurity Professional",
    description: "Computer Software Engineer & Uprising Cybersecurity Professional. Specializing in React, Next.js, TypeScript, and modern web development.",
    images: [
      {
        url: "/assets/images/me.png",
        width: 400,
        height: 400,
        alt: "Japheth Jerry - Software Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://japhethjerry.space",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO Content for better indexing */}
      <div style={{ display: 'none' }}>
        <h1>Japheth Jerry - Software Engineer & Cybersecurity Professional</h1>
        <p>Japheth Jerry is a skilled Software Engineer and Cybersecurity Professional with expertise in React, Next.js, TypeScript, and full-stack web development. Based in Nigeria, offering professional web development services and software engineering solutions.</p>
        <h2>Software Engineer Services</h2>
        <p>Professional software engineering services including web development, mobile app development, UI/UX design, and cybersecurity solutions. Specializing in React, Next.js, TypeScript, and modern web technologies.</p>
      </div>

      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                {/* <Link className="overlay-link" href="/about" /> */}
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
                  <p>Computer Software Engineer &amp; Uprising Cybersecurity Professional</p>
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
                        <span> OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" /> OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" /> OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" /> OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" /> OPEN FOR
                          <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" /> OPEN FOR <b>WORK</b> <img src="/assets/images/star1.svg" alt="Star" /></span>
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
  )
}

