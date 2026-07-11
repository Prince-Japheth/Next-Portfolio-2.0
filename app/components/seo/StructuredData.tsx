import React from 'react';

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

  // Project schemas for better SEO
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[|]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const projects = [
    {
      title: 'PicaTip',
      slug: 'picatip',
      image: `${siteUrl}/assets/images/project-62.avif`,
      description: 'An AI-powered sports prediction platform delivering real-time football and basketball analytics, intelligent booking codes, and comprehensive match intelligence for sports enthusiasts.',
      tools: 'Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, Framer Motion, Serwist',
      url: 'https://picatip.com'
    },
    {
      title: 'Periderm CLI',
      slug: 'periderm-cli',
      image: `${siteUrl}/assets/images/project-61.avif`,
      description: 'An enterprise-grade platform offering a 150+ point pre-launch scanner. Automatically catching user-losing bugs, legal liabilities, revenue leaks, and runaway cloud bills before they hit production.',
      tools: 'TypeScript, Node.js, React, Vite, TanStack, Supabase',
      url: 'https://periderm-cli.vercel.app/'
    },
    {
      title: 'Popkup',
      slug: 'popkup',
      image: `${siteUrl}/assets/images/project-59.avif`,
      description: 'An all-in-one e-commerce platform built with Next.js, enabling brands to launch storefronts, connect with influencers, and seamlessly manage checkout and shipping workflows.',
      tools: 'Next.js, React, TypeScript, Tailwind CSS',
      url: 'https://popkup.com/'
    },
    {
      title: 'Lincoln Impact Foundation',
      slug: 'lincoln-impact-foundation',
      image: `${siteUrl}/assets/images/project-4.avif`,
      description: 'A comprehensive digital platform supporting donation processing, scholarship applications, and impact tracking to empower the foundation\'s operations.',
      tools: 'Laravel, MySQL, JavaScript, jQuery, CSS, SASS, Bootstrap',
      url: 'https://lincolnfoundations.org'
    },
    {
      title: 'Onarietta Remet | Official Site',
      slug: 'onarietta-remet-official-site',
      image: `${siteUrl}/assets/images/project-53.avif`,
      description: 'An immersive digital exhibition platform designed to showcase the artist\'s portfolio with high-performance interactive elements and elegant visual aesthetics.',
      tools: 'React.js, Next.js, Tailwind, CSS',
      url: 'https://www.onariettaremet.com/'
    },
    {
      title: 'J3 Global Ventures Limited',
      slug: 'j3-global-ventures-limited',
      image: `${siteUrl}/assets/images/project-58.avif`,
      description: 'A professional corporate website for J3 Global Ventures Limited, a leading conglomerate specializing in diverse industries including confectionery, beverages, import/export, and farming.',
      tools: 'NextJs, Typescript, CSS, Bootstrap',
      url: 'https://j3globalventures.vercel.app/'
    },
    {
      title: 'LCDP School Management System',
      slug: 'lcdp-school-management-system',
      image: `${siteUrl}/assets/images/project-52.avif`,
      description: 'A school management system designed for LCDP, providing efficient and user-friendly management of school activities.',
      tools: 'JavaScript, Html, PHP Laravel, MySQL, jQuery, CSS, Bootstrap',
      url: 'https://gudu.lcpd.net/'
    }
  ];

  const projectItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${fullName} Projects`,
    "description": "Portfolio of software development projects",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "url": `${siteUrl}/projects/${project.slug}`,
        "author": { "@id": personId },
        "creator": { "@id": personId },
        "keywords": project.tools,
        "inLanguage": "en",
        "about": {
          "@type": "Thing",
          "name": "Software Development"
        }
      }
    }))
  };

  try {
    const DOMPurify = { sanitize: (s: string) => s };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(personSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(imageSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(organizationSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(websiteSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(profilePageSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(siteNavigationSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(creativeWorkSchema).replace(/</g, '\\u003c')) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(projectItemListSchema).replace(/</g, '\\u003c')) }} />
      </>
    );
  } catch (error) {
    console.error("[StructuredData] Error generating JSON-LD structured data:", error);
    return null;
  }
};

export default StructuredData;
