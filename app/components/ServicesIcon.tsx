"use client";

import Link from "next/link";
import Image from "next/image";
import { useWordpress } from "../providers/WordpressProvider";

const ServicesIcon = () => {
    const { isWordpress } = useWordpress();

    return (
        <div data-aos="zoom-in" className="h-full">
            <div className="about-services-box info-box shadow-box h-full">
                <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
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
                        <h4>{isWordpress ? "SERVICES" : "passions"}</h4>
                        <h1>{isWordpress ? "How I Help You" : "What I Love"}</h1>
                    </div>
                    <Link href="/service" className="about-btn">
                        <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesIcon;
