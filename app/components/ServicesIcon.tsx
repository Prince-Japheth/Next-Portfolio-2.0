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
                    <i className="iconoir-mobile-dev-mode" />
                    <i className="iconoir-laptop-dev-mode" />
                    <i>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/9529/9529941.png"
                            alt=""
                            style={{ filter: "invert(100%)" }}
                            width={40}
                        />
                    </i>
                    <i>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/7859/7859071.png"
                            alt=""
                            style={{ filter: "invert(100%)" }}
                            width={40}
                        />
                    </i>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                        <h4>specialization</h4>
                        <h1>Services I Offer</h1>
                    </div>
                    <Link href="/service" legacyBehavior>
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
