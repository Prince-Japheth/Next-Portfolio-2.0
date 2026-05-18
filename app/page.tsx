import { Metadata } from "next";
import ServicesIcon from "./components/ServicesIcon";
import ResumeBox from "./components/ResumeBox";
import ShowcaseProjectsBox from "./components/ShowcaseProjectsBox";
import ProfileContactBox from "./components/ProfileContactBox";
import ContactBox from "./components/ContactBox";
import ClientStatsBox from "./components/ClientStatsBox";
import Link from "next/link";
import Image from "next/image";

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
    title: "Japheth Jerry — Software Engineer & Cyber Security Specialist",
    description: "Software Engineer and Cyber Security Specialist, passionate about building innovative solutions and exploring the intersection of technology and creativity.",
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
    title: "Japheth Jerry — Software Engineer & Cyber Security Specialist",
    description: "Software Engineer and Cyber Security Specialist, passionate about building innovative solutions and exploring the intersection of technology and creativity.",
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
                 <Image 
                   src="/assets/images/bg1.png" 
                   alt="BG" 
                   className="bg-img" 
                   width={600} 
                   height={600} 
                   priority 
                 />
                 <div className="img-box">
                   <div className="profile-image-container">
                     <Image 
                       src="/assets/images/me2.avif" 
                       alt="About Me Alternate" 
                       width={380} 
                       height={380} 
                       priority 
                     />
                     <Image 
                       src="/assets/images/me.avif" 
                       alt="About Me" 
                       width={300} 
                       height={300} 
                       priority 
                     />
                   </div>
                 </div>
                <div className="infos">
                  <h4>Software Engineer & Cyber Security Specialist</h4>
                  <h1>Japheth Jerry.</h1>
                  <p>Software Engineer and Cyber Security Specialist. Always learning, always building.</p>
                  <Link href="/about" className="about-btn">
                    <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
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
                        <span aria-label="Professional focus and expertise">
                          BUILDING <b>SOLUTIONS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
                          SECURING <b>SYSTEMS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
                          SCALING <b>IDEAS</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
                          CRAFTING <b>CODE</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
                          DESIGNING <b>EXPERIENCES</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
                          SOLVING <b>COMPLEXITY</b> <Image src="/assets/images/star1.svg" alt="Star" width={15} height={15} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 10px' }} />
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