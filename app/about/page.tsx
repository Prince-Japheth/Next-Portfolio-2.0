import ServicesIcon from "../components/ServicesIcon";  
import ResumeBox from "../components/ResumeBox";  
import ProfileContactBox from "../components/ProfileContactBox";  
import ContactBox from "../components/ContactBox";  
  
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
              <h1>Japheth Jerry</h1>  
              <p>I am a Computer Software Engineer with a focus on Web and Mobile Application Development,  
                UI/UX Design &amp; Graphic Design. I have a diverse range of experience having worked across  
                various  
                fields and industries.</p>  
            </div>  
          </div>  
        </div>  
        <div className="row mt-24">  
          <div className="col-md-6" data-aos="zoom-in">  
            <div className="about-edc-exp about-experience shadow-box">  
              <a className="overlay-link" href="./credentials.html" />  
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />  
              <h3>EXPERIENCE</h3>  
              <ul style={{ display: 'inline-block' }}>  
                <li>  
                  <p className="date">2023 - 2024</p>  
                  <h2>Software Engineer</h2>  
                  <p className="type">Spicodex</p>  
                </li>  
                <li>  
                  <p className="date">2022 - 2024</p>  
                  <h2>UI/UX and Web Developer</h2>  
                  <p className="type">Safekan</p>  
                </li>  
              </ul>  
              <a href="./resume.html" className="about-btn" style={{ marginLeft: '200px' }}>  
                <img src="./assets/images/icon.svg" alt="Button" />  
              </a>  
            </div>  
          </div>  
          <div className="col-md-6" data-aos="zoom-in">  
            <div className="about-edc-exp about-education shadow-box">  
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />  
              <h3>EDUCATION</h3>  
              <ul>  
                <li>  
                  <p className="date">2022 - Present</p>  
                  <h2>Bachelor in Software Engineering &amp; Cybersecurity</h2>  
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
            <div className="d-flex flex-column flex-md-row profile-contact-resume-wrap gap-24">  
              <ServicesIcon />  
              <ResumeBox />  
              <ProfileContactBox  
                showGithub={true}  
                showLinkedin={false}  
                showMail={true}  
                showInstagram={true}  
                showWhatsapp={false}  
                className="flex-1"  
              />  
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
