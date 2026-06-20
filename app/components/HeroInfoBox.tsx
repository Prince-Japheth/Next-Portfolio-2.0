"use client";

import Link from "next/link";
import Image from "next/image";
import { useWordpress } from "../providers/WordpressProvider";

export default function HeroInfoBox() {
  const { isWordpress } = useWordpress();

  return isWordpress ? (
    <div className="infos">
      <h4 itemProp="jobTitle">WordPress Web Design & Security Expert</h4>
      <h1 itemProp="name">Japheth Jerry.</h1>
      <p itemProp="description">
        Premium WordPress websites designed by a professional Software Engineer. 
        I build secure, high-performing sites with built-in SEO and SSL/TLS.
      </p>
      <Link href="/about" className="about-btn">
        <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
      </Link>
    </div>
  ) : (
    <div className="infos">
      <h4 itemProp="jobTitle">Software Engineer & Cyber Security Specialist</h4>
      <h1 itemProp="name">Japheth Jerry.</h1>
      <p itemProp="description">Software Engineer and Cyber Security Specialist. Always learning, always building.</p>
      <Link href="/about" className="about-btn">
        <Image src="/assets/images/icon.svg" alt="Button" width={30} height={30} />
      </Link>
    </div>
  );
}
