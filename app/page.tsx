import ServicesIcon from "./components/ServicesIcon";
import ResumeBox from "./components/ResumeBox";
import ShowcaseProjectsBox from "./components/ShowcaseProjectsBox";
import ProfileContactBox from "./components/ProfileContactBox";
import ContactBox from "./components/ContactBox";
import ClientStatsBox from "./components/ClientStatsBox";

export default function Home() {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-me-box shadow-box">
              <a className="overlay-link" href="/about" />
              <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
              <div className="img-box">
                <img src="/assets/images/me.png" alt="About Me" />
              </div>
              <div className="infos">
                <h4>Computer Software Engineer</h4>
                <h1>Japheth Jerry.</h1>
                <p>I am a Computer Software Engineer &amp; Uprising Cybersecurity Professional based in
                  Nigeria.</p>
                <a href="#" className="about-btn">
                  <img src="/assets/images/icon.svg" alt="Button" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="about-resume-wrap d-flex flex-1 flex-column">
              <div data-aos="zoom-in">
                <div className="banner shadow-box">
                  <div className="marquee">
                    <div>
                      <span>LATEST WORK AND <b>FEATURED</b> <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND <b>FEATURED</b> <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND
                        <b>FEATURED</b> <img src="/assets/images/star1.svg" alt="Star" /> LATEST
                        WORK AND <b>FEATURED</b> LATEST WORK AND <img src="/assets/images/star1.svg" alt="Star" /> LATEST WORK AND
                        <b>FEATURED</b> LATEST WORK AND <img src="/assets/images/star1.svg" alt="Star" /></span>
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

