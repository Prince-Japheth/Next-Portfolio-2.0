export default function Contact() {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="gx-row d-flex justify-content-between gap-24">
          <div className="contact-infos">
            <h3 data-aos="fade-up">Contact Info</h3>
            <ul className="contact-details">
              <li className="d-flex align-items-center" data-aos="zoom-in">
                <div className="icon-box shadow-box">
                  <i className="iconoir-mail" />
                </div>
                <div className="right">
                  <span>MAIL us</span>
                  <h4>princejaphethjj@gmail.com</h4>
                  <h4>japhethjerryjj@gmail.com</h4>
                </div>
              </li>
              <li className="d-flex align-items-center" data-aos="zoom-in">
                <div className="icon-box shadow-box">
                  <i className="iconoir-phone" />
                </div>
                <div className="right">
                  <span>Contact Us</span>
                  <h4>+234 803 476 6310</h4>
                  <h4>+234 905 444 1614</h4>
                </div>
              </li>
            </ul>
            <h3 data-aos="fade-up">Social Info</h3>
            <ul className="social-links d-flex align-center" data-aos="zoom-in">
              <li>
                <a href="https://linkedin.com/in/japheth-jerry-34a513274" target="_blank">
                  <i className="iconoir-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_prince_yafet_/" target="_blank">
                  <i className="iconoir-instagram" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/c/2348034766310" target="_blank">
                  <i className="iconoir-whatsapp" />
                </a>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-in" className="contact-form">
            <div className="shadow-box">
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <img src="./assets/images/icon3.png" alt="Icon" />
              <h1>Let’s work <span>together.</span></h1>
              <form action="https://formspree.io/f/mqakppnn" method="POST" id="contactForm">
                <div className="alert alert-success messenger-box-contact__msg" style={{ display: 'none' }} role="alert">
                  Your message was sent successfully.
                </div>
                <div className="input-group">
                  <input type="text" name="name" id="full-name" placeholder="Name *" required data-form-input />
                </div>
                <div className="input-group">
                  <input type="email" name="_replyto" id="email" placeholder="Email *" required data-form-input />
                </div>
                <div className="input-group">
                  <textarea name="message" id="message" placeholder="Your Message *" required data-form-input defaultValue={""} />
                </div>
                <div className="input-group">
                  <button className="theme-btn submit-btn" name="submit" type="submit" data-form-btn>Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

