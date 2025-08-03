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
  description:
    "Japheth Jerry is a professional Full Stack Software Engineer and Cybersecurity-aware Web Developer based in Nigeria. Specializing in React, Next.js, TypeScript, and secure scalable web apps. Hire today. Co-founder of Qallie (qallie.online).",
  keywords: [
    "Japheth Jerry", "Software Engineer", "Software Engineer Nigeria", "React Developer", "Next.js Developer", "TypeScript Developer", "Cybersecurity Professional", "MERN Stack Developer", "Laravel Developer", "UI/UX Developer", "Mobile App Developer Nigeria", "Hire Software Engineer", "Web Development Services", "Secure Web Developer", "Remote React Developer", "Nigeria-based Web Developer", "Hire Software Engineer", "Professional Portfolio Web Developer", "Responsive Frontend Developer", "Secure App Development", "Co-founder Qallie", "Qallie.online"
  ],
  openGraph: {
    title: "Japheth Jerry — Full Stack Software Engineer | React, Next.js, TypeScript",
    description:
      "Hire a results-driven Software Engineer. Specialized in React, Next.js, TypeScript, Laravel, and mobile-first secure web apps. Co-founder of Qallie.",
    images: [
      {
        url: "/assets/images/project_0.png",
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
    description: "Scalable, secure, high-performance web development services. Hire Japheth Jerry today. Co-founder of Qallie.",
    site: "https://x.com/Yafet_Tim"
  }
};

export default function Home() {
  return (
    <>
      {/* SEO Content for better indexing */}
      <div style={{ display: 'none' }}>
        <h1>Japheth Jerry — Software Engineer & Uprising Cybersecurity Professional</h1>
        <h3>Co-founder of Qallie — https://qallie.online</h3>
        <h3>Professional Mobile, Computer and Web Development Services with UI/UX Precision and Cybersecurity Awareness</h3>
        <h3>Custom Full Stack Solutions: From Concept to Deployment</h3>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Japheth Jerry",
            "url": "https://japhethjerry.space",
            "jobTitle": "Full Stack Software Engineer",
            "worksFor": [
              { "@type": "Organization", "name": "Qallie", "url": "https://qallie.online" }
            ],
            "knowsAbout": [
              "React.js", "Next.js", "TypeScript", "Laravel", "MERN Stack",
              "Cybersecurity in Web Development", "UI/UX Design",
              "Mobile App Development", "Progressive Web Apps"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Nigeria"
            },
            "sameAs": [
              "https://www.linkedin.com/in/japheth-jerry-34a513274/",
              "https://japhethjerry.space",
              "https://www.instagram.com/_prince_yafet/",
              "https://x.com/Yafet_Tim",
              "https://qallie.online"
            ]
          })
        }} />
      </div>

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
                  <p>Computer Software Engineer & Cybersecurity-Aware Developer. Co-founder of Qallie.</p>
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
