"use client";

import WhatsAppLink from "../components/shared/WhatsAppLink";
import { CONTACT_NUMBERS, CONTACT_EMAILS } from "@/lib/constants/contact";
import Image from "next/image";

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
                  <span>MAIL me</span>
                  <h4
                    onClick={() => window.location.href = `mailto:${CONTACT_EMAILS.PRIMARY}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {CONTACT_EMAILS.PRIMARY}
                  </h4>
                  {/* <h4>{CONTACT_EMAILS.SECONDARY}</h4> */}
                </div>
              </li>
              <li className="d-flex align-items-center" data-aos="zoom-in">
                <div className="icon-box shadow-box">
                  <i className="iconoir-phone" />
                </div>
                <div className="right">
                  <span>Contact Me</span>
                  <h4
                    onClick={() => window.location.href = `tel:${CONTACT_NUMBERS.PRIMARY}`}
                    style={{ cursor: 'pointer' }}
                  >
                    {CONTACT_NUMBERS.PRIMARY}
                  </h4>
                  {/* <h4>{CONTACT_NUMBERS.SECONDARY}</h4> */}
                </div>
              </li>
            </ul>
            <h3 data-aos="fade-up">Social Info</h3>
            <ul className="social-links d-flex align-center" data-aos="zoom-in">
              <li>
                <a href="https://www.linkedin.com/in/japheth-jerry-34a513274/" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn Profile" title="LinkedIn Profile">
                  <i className="iconoir-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_prince_yafet_/" target="_blank" rel="me noopener noreferrer" aria-label="Instagram Profile" title="Instagram Profile">
                  <i className="iconoir-instagram" />
                </a>
              </li>
              <li>
                <WhatsAppLink aria-label="WhatsApp Contact" title="WhatsApp Contact">
                  <i className="iconoir-whatsapp" />
                </WhatsAppLink>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-in" className="contact-form">
            <div className="shadow-box">
              <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} priority />
              <Image src="/assets/images/icon3.png"
                className="star-icon"
                alt="Icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
              />
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

