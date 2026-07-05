import type { Metadata } from "next";
import ServicesIcon from "./components/ServicesIcon";
import ResumeBox from "./components/ResumeBox";
import ShowcaseProjectsBox from "./components/ShowcaseProjectsBox";
import ProfileContactBox from "./components/ProfileContactBox";
import ContactBox from "./components/ContactBox";
import ClientStatsBox from "./components/ClientStatsBox";
import HeroInfoBox from "./components/HeroInfoBox";
import HeroMarquee from "./components/HeroMarquee";
import Link from "next/link";
import Image from "next/image";
import ProjectItem from "./components/ProjectItem";
import { projectData } from "./data/projects";

export const metadata: Metadata = {
  title: "Japheth Jerry — Software Engineer & Cyber Security Specialist",
  description: "Software Engineer and Cyber Security Specialist, passionate about building innovative solutions.",
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
    "Cyber Security Specialist",
    "MERN Stack Developer",
    "Laravel Developer",
    "UI/UX Developer",
    "Mobile App Developer",
    "Hire Software Engineer",
    "Web Development Services",
    "Secure Web Developer",
    "Remote React Developer",
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
    title: "Japheth Jerry — Software Engineer & Cyber Security Specialist",
    description: "Software Engineer and Cyber Security Specialist, passionate about building innovative solutions and exploring the intersection of technology and creativity.",
    images: [
      {
        url: "/assets/images/me.png",
        width: 1200,
        height: 1200,
        alt: "Japheth Jerry - Software Engineer",
      }
    ],
    url: "https://www.japhethjerry.space",
    type: "website"
  },
  alternates: {
    canonical: "https://www.japhethjerry.space"
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Jerry — Software Engineer & Cyber Security Specialist",
    description: "Software Engineer and Cyber Security Specialist, passionate about building innovative solutions and exploring the intersection of technology and creativity.",
    images: ["/assets/images/me.png"],
    creator: "@Yafet_Tim"
  }
};

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home(props: PageProps) {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in">
              <article className="about-me-box shadow-box" itemScope itemType="https://schema.org/Person">
                <Image
                  src="/assets/images/bg1.png"
                  alt="BG"
                  className="bg-img"
                  width={600}
                  height={600}
                  priority
                  loading="eager"
                />
                <div className="img-box">
                  <div className="profile-image-container">
                    {/* <Image
                      src="/assets/images/me2.avif"
                      alt="About Me Alternate"
                      width={420}
                      height={420}
                      priority
                    /> */}
                    <Image
                      itemProp="image"
                      src="/assets/images/me.avif"
                      alt="Japheth Jerry"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                </div>
                <HeroInfoBox />
              </article>
            </div>
            <div className="col-md-6 d-flex">
              <div className="about-resume-wrap d-flex flex-1 flex-column">
                <div data-aos="zoom-in">
                  <HeroMarquee />
                </div>
                <div className="gx-row d-flex gap-24 h-full">
                  <ServicesIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-24">
            <div className="col-md-12">
              <div className="d-flex align-items-center gap-24 mb-24" data-aos="fade-up">
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .recent-projects-heading { font-size: 1.2rem !important; white-space: nowrap; }
                    .recent-projects-heading img { width: 14px !important; height: 14px !important; }
                  }
                `}} />
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.4)' }} />
                <h2 className="section-heading recent-projects-heading" style={{ margin: 0, padding: 0 }}>
                  <Image src="/assets/images/star-2.png" alt="Star" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', display: 'inline-block' }} />
                  Recent Projects
                  <Image src="/assets/images/star-2.png" alt="Star" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto', display: 'inline-block' }} />
                </h2>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.4)' }} />
              </div>
              <div className="blog-service-profile-wrap d-flex flex-column flex-md-row gap-24 projects-area recent-projects-area" style={{ padding: 0, margin: 0, border: 'none', background: 'transparent', alignItems: 'stretch' }}>
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .recent-projects-area .project-item-card { width: 100% !important; flex: none !important; }
                  }
                `}} />
                {[
                  projectData.find(p => p.title === 'Periderm CLI'),
                  projectData.find(p => p.title === 'Lincoln Impact Foundation'),
                  projectData.find(p => p.title.includes('Onarietta Remet'))
                ].filter(Boolean).map((project, index) => (
                  <ProjectItem key={`recent-project-${index}`} project={project!} showWordPress={false} isHomePage={true} />
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-24">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex flex-column flex-md-row gap-24">
                <style dangerouslySetInnerHTML={{__html: `
                  @media (max-width: 768px) {
                    .mobile-equal-width > div { width: 50% !important; flex: 0 0 50% !important; }
                    .mobile-equal-width { gap: 12px !important; }
                  }
                `}} />
                <div className="d-flex gap-24 flex-1 mobile-equal-width">
                  <ResumeBox className="flex-1" />
                  <ShowcaseProjectsBox className="flex-1" />
                </div>
                <ProfileContactBox
                  showGithub={true}
                  showLinkedin={true}
                  showMail={true}
                  showInstagram={true}
                  showWhatsapp={true}
                  className="flex-1"
                />
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