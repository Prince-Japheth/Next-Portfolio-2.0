import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

/**
 * StructuredData component to inject JSON-LD into the head.
 * This helps Google understand the site content better and enables features like Sitelinks.
 */
const StructuredData = () => {
  const siteUrl = 'https://www.japhethjerry.space';
  const siteName = 'Japheth Jerry';
  const fullName = 'Japheth Jerry';
  const logoUrl = `${siteUrl}/assets/images/logo.svg`;
  const profileImageUrl = `${siteUrl}/assets/images/me.avif`;

  const personId = `${siteUrl}/#person`;
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    "name": fullName,
    "givenName": "Japheth",
    "familyName": "Jerry",
    "additionalName": "Oluwatimileyin",
    "alternateName": [
      "Timileyin",
      "Oluwatimileyin",
      "Japheth Oluwatimileyin Jerry",
      "Japheth Jerry",
      "Yafet",
      "Prince Yafet"
    ],
    "jobTitle": "Software Engineer & Cyber Security Specialist",
    "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development. Cyber Security Specialist.",
    "url": siteUrl,
    "image": {
      "@type": "ImageObject",
      "url": profileImageUrl,
      "width": 400,
      "height": 400,
      "caption": `${fullName} - Software Engineer & Cyber Security Specialist`
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q135583647",
      "https://www.linkedin.com/in/japheth-jerry-34a513274/",
      "https://github.com/Prince-Japheth",
      "https://www.instagram.com/_prince_yafet_/",
      "https://twitter.com/Yafet_Tim",
      siteUrl
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Mobile Development",
      "UI/UX Design",
      "API Integration",
      "Database Management",
      "Cybersecurity",
      "Web Development",
      "Frontend Development",
      "Full Stack Development",
      "Graphic Design",
      "Software Engineering"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "J3 Global Ventures Limited",
        "url": "https://j3globalventures.vercel.app/"
      },
      {
        "@type": "Organization",
        "name": "Popkup",
        "url": "https://www.popkup.com/"
      },
      {
        "@type": "Organization",
        "name": "Spicodex",
        "url": "https://spicodex.com/"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "description": "Full Stack Software Engineer specializing in React, TypeScript, and modern web development"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Lincoln University College"
    }
  };

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": `${fullName} Profile Photo`,
    "description": `${fullName} - Software Engineer & Cyber Security Specialist`,
    "url": profileImageUrl,
    "width": 400,
    "height": 400,
    "caption": `${fullName} - Software Engineer & Cyber Security Specialist`,
    "creator": { "@id": personId },
    "license": siteUrl,
    "thumbnailUrl": profileImageUrl,
    "contentUrl": profileImageUrl,
    "creditText": fullName,
    "copyrightNotice": `© 2024 ${fullName}. All rights reserved.`,
    "acquireLicensePage": siteUrl
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    "name": `${fullName} Portfolio`,
    "url": siteUrl,
    "logo": logoUrl,
    "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development. Cyber Security Specialist.",
    "founder": { "@id": personId },
    "sameAs": personSchema.sameAs
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    "name": siteName,
    "url": siteUrl,
    "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development",
    "author": { "@id": personId },
    "publisher": { "@id": organizationId },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "url": siteUrl,
    "isPartOf": { "@id": websiteId },
    "mainEntity": { "@id": personId },
    "about": { "@id": personId }
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": siteUrl
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "About",
        "url": `${siteUrl}/about`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Resume",
        "url": `${siteUrl}/resume`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Portfolio",
        "url": `${siteUrl}/projects`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact",
        "url": `${siteUrl}/contact`
      }
    ]
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${fullName} Portfolio`,
    "author": { "@id": personId },
    "description": `Portfolio website of ${fullName} - Software Engineer specializing in React, TypeScript, and modern web development`,
    "url": siteUrl,
    "mainEntity": { "@id": personId }
  };

  try {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(personSchema)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(imageSchema)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(organizationSchema)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(websiteSchema)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(profilePageSchema)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(siteNavigationSchema)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(creativeWorkSchema)) }} />
      </>
    );
  } catch (error) {
    console.error("[StructuredData] Error generating JSON-LD structured data:", error);
    return null;
  }
};

export default StructuredData;
