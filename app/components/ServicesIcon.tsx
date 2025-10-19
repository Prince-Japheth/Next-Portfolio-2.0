"use client";

import Link from "next/link";

const ServicesIcon = () => {
    return (
        <div data-aos="zoom-in">
            <div className="about-services-box info-box shadow-box h-full">
                {/* <Link href="/service" legacyBehavior>
                    <a className="overlay-link" />
                </Link> */}
                <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
                <div className="icon-boxes">
                    <div className="skill-card">
                        <i className="iconoir-mobile-dev-mode" />
                        <div className="tooltip shadow-box">Mobile Development</div>
                    </div>
                    <div className="skill-card">
                        <i className="iconoir-laptop-dev-mode" />
                        <div className="tooltip shadow-box">Web Development</div>
                    </div>
                    <div className="skill-card">
                        <i className="iconoir-figma" />
                        <div className="tooltip shadow-box">UI/UX Design</div>
                    </div>
                    <div className="skill-card">
                        <i className="iconoir-adobe-photoshop" />
                        <div className="tooltip shadow-box">Graphic Design</div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>passions</h4>
                        <h1>What I Love</h1>
                    </div>
                    <Link href="/about" legacyBehavior>
                        <a className="about-btn">
                            <img src="/assets/images/icon.svg" alt="Button" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesIcon;
