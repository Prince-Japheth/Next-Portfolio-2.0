import ServicesIcon from "./components/ServicesIcon";
import ResumeBox from "./components/ResumeBox";
import ShowcaseProjectsBox from "./components/ShowcaseProjectsBox";
import ProfileContactBox from "./components/ProfileContactBox";
import ContactBox from "./components/ContactBox";
import ClientStatsBox from "./components/ClientStatsBox";
import Link from "next/link";

export default function Home() {
  return (
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

  )
}

