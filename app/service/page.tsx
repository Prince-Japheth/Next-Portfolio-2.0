import ContactBox from "../components/ContactBox";
import ResumeBox from "../components/ResumeBox";
import ShowcaseProjectsBox from "../components/ShowcaseProjectsBox";
import ServiceItem from "../components/ServiceItem";
import SidebarItem from "../components/SidebarItem";

const serviceItems = [
  {
    title: "Cross-Platform Mobile App Development",
    description: `Using tools like React Native and Flutter, I develop high-performance mobile
                  apps that run seamlessly on both iOS and Android. By leveraging a single
                  codebase, I ensure faster development cycles and consistent experiences
                  across platforms, resulting in improved user satisfaction and reduced
                  operational costs.`,
  },
  {
    title: "Full-Stack Web Development",
    description: `I design and build robust web applications using modern technologies like
                  React, Laravel, PHP, and MySQL. From intuitive front-end interfaces to
                  scalable back-end architecture, I focus on delivering fast, secure, and
                  optimized solutions that drive user engagement and improve business
                  workflows.`,
  },
  {
    title: "UI/UX Design",
    description: `I specialize in creating intuitive, user-centered designs that align with
                  your business goals. Using tools like Figma and Adobe XD, I craft visually
                  stunning and functional interfaces. My process, which includes user
                  research, wireframing, and prototyping, ensures your project delivers
                  measurable results like improved user retention rates and satisfaction.`,
  },
  {
    title: "Graphic Design",
    description: `From logo design to marketing materials, I provide graphic design services
                  that elevate your brand’s story. With expertise in Adobe Photoshop,
                  Illustrator, CorelDRAW, and Canva, I create visuals that connect with your
                  audience and drive engagement. Past projects include branding packages,
                  social media assets, and promotional materials that have increased
                  visibility and customer interaction.`,
  },
];

const sidebarItems = [
  {
    icon: <i className="iconoir-mobile-dev-mode icon" />,
    text: "CROSS-PLATFORM MOBILE APP DEVELOPMENT",
  },
  {
    icon: <i className="iconoir-laptop-dev-mode icon" />,
    text: "WEB DEVELOPMENT",
  },
  {
    icon: (
      <i className="icon">
        <img
          src="https://cdn-icons-png.flaticon.com/128/7859/7859071.png"
          alt=""
          style={{ filter: "invert(100%)" }}
          width={40}
        />
      </i>
    ),
    text: "UI/UX DESIGN",
  },
  {
    icon: (
      <i className="icon">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9529/9529941.png"
          alt=""
          style={{ filter: "invert(100%)" }}
          width={40}
        />
      </i>
    ),
    text: "GRAPHIC DESIGN",
  },
];

export default function Services() {
  return (
    <section className="service-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src="./assets/images/star-2.png" alt="Star" /> My Services{" "}
          <img src="./assets/images/star-2.png" alt="Star" />
        </h1>
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4">
            <div className="service-sidebar" data-aos="fade-right">
              <div className="service-sidebar-inner shadow-box">
                <ul>
                  {sidebarItems.map((item, index) => (
                    <SidebarItem key={index} icon={item.icon} text={item.text} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="col-md-8">
            <h1 className="section-heading" data-aos="fade-up">
              <img src="./assets/images/star-2.png" alt="Star" />
              My Services <img src="./assets/images/star-2.png" alt="Star" />
            </h1>
            <div className="service-content-wrap" data-aos="zoom-in">
              <div className="service-content-inner shadow-box">
                <div className="service-items">
                  {serviceItems.map((item, index) => (
                    <ServiceItem
                      key={index}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-24">
          <div className="col-md-12">
            <div className="d-flex profile-contact-resume-wrap gap-24">
              <ShowcaseProjectsBox />
              <ContactBox className="flex-1" />
              <ResumeBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
