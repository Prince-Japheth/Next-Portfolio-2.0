"use client";

import Link from "next/link";
import Image from "next/image";
import { useWordpress } from "../providers/WordpressProvider";

interface ServicesIconProps {
    originalStyle?: boolean;
}

const ServicesIcon = ({ originalStyle = false }: ServicesIconProps) => {
    const { isWordpress } = useWordpress();

    return (
        <div data-aos="zoom-in" className={`h-full ${originalStyle ? 'original-style-active' : ''}`}>
            {originalStyle && (
                <style dangerouslySetInnerHTML={{__html: `
                    .original-style-active .icon-boxes {
                        margin-top: 46px !important;
                        margin-bottom: 56px !important;
                    }
                    @media (max-width: 800px) {
                        .original-style-active .icon-boxes {
                            margin-top: 31px !important;
                            margin-bottom: 39px !important;
                        }
                    }
                `}} />
            )}
            <div className="about-services-box info-box shadow-box h-full">
                <Link href="/service" className="overlay-link" aria-label="View services" />
                <Image src="/assets/images/bg1.png" alt="" aria-hidden="true" className="bg-img" width={600} height={600} loading="lazy" fetchPriority="low" />
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
