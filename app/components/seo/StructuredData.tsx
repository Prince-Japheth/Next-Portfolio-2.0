import React from 'react';

/**
 * StructuredData component to inject JSON-LD into the head.
 * This helps Google understand the site content better and enables features like Sitelinks.
 */
const StructuredData = () => {
  const siteUrl = 'https://japhethjerry.space';
  const siteName = 'Japheth Jerry';
  const fullName = 'Japheth Jerry';
  const logoUrl = `${siteUrl}/assets/images/logo.svg`;
  const profileImageUrl = `${siteUrl}/assets/images/me2.avif`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": fullName,
    "alternateName": [
      "Timileyin",
      "Oluwatimileyin",
      "Japheth Oluwatimileyin Jerry",
      "Japheth Jerry",
      "Yafet",
      "Prince Yafet"
    ],
    "jobTitle": "Software Engineer & Cyber Security Specialist",
    "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development and Cyber Security Specialist.",
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
      "https://www.instagram.com/_prince_yafet/",
      "https://x.com/Yafet_Tim",
      siteUrl,
      "https://qallie.online"
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
        "name": "Qallie",
        "url": "https://qallie.online"
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
    "description": `${fullName} - Software Engineer and Co-Founder of Qallie`,
    "url": profileImageUrl,
    "width": 400,
    "height": 400,
    "caption": `${fullName} - Software Engineer and Co-Founder of Qallie`,
    "creator": {
      "@type": "Person",
      "name": fullName
    },
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
    "name": `${fullName} Portfolio`,
    "url": siteUrl,
    "logo": logoUrl,
    "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development. Cyber Security Specialist.",
    "founder": {
      "@type": "Person",
      "name": fullName
    },
    "sameAs": [
      "https://www.wikidata.org/wiki/Q135583647",
      "https://www.linkedin.com/in/japheth-jerry-34a513274/",
      "https://www.instagram.com/_prince_yafet/",
      "https://x.com/Yafet_Tim",
      siteUrl,
      "https://qallie.online"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development",
    "author": {
      "@type": "Person",
      "name": fullName
    },
    "publisher": {
      "@type": "Organization",
      "name": `${fullName} Portfolio`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
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
    "author": {
      "@type": "Person",
      "name": fullName,
      "alternateName": [fullName, "Yafet", "Prince Yafet"],
      "jobTitle": "Software Engineer",
      "description": "Co-Founder & CTO at Qallie, Software Engineer and Cybersecurity Specialist"
    },
    "description": `Portfolio website of ${fullName} - Software Engineer specializing in React, TypeScript, and modern web development`,
    "url": siteUrl,
    "mainEntity": {
      "@type": "Person",
      "name": fullName,
      "jobTitle": "Software Engineer",
      "description": "Co-Founder & CTO at Qallie, Software Engineer and Cybersecurity Specialist"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
    </>
  );
};

export default StructuredData;
