import type { Metadata } from "next";
import type React from "react";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL('https://japhethjerry.space'),
  title: {
    default: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    template: "%s | Japheth Jerry"
  },
          description: "Co-Founder & CTO at Qallie, Software Engineer and Uprising CyberSecurity Profesional. Specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
  keywords: [
    "Japheth",
    "Jerry",
    "Timileyin",
    "Oluwatimileyin",
    "Japheth Oluwatimileyin Jerry",
    "Japheth Jerry", 
    "Qallie",
    "Co-Founder of Qallie",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Full Stack Developer",
    "Cybersecurity Professional",
    "MERN Stack Developer",
    "Laravel Developer",
    "UI/UX Developer",
    "Mobile App Developer",
    "Hire Software Engineer",
    "Web Development Services",
    "Secure Web Developer",
    "Remote React Developer",
    "Web Developer",
    "Professional Portfolio Web Developer",
    "Responsive Frontend Developer",
    "Secure App Development",
    "Co-founder & CTO Qallie",
    "Qallie.online",
    "About Japheth Jerry",
    "Software Engineer Background",
    "Web Developer Experience",
    "UI/UX Designer",
    "Graphic Designer",
    "Education"
  ],
  authors: [{ name: "Japheth Jerry" }],
  creator: "Japheth Jerry",
  publisher: "Japheth Jerry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '32x32',
      },
      {
        url: '/assets/images/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/images/logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/assets/images/logo.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        url: '/assets/images/logo.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/assets/images/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'apple-touch-icon',
        url: '/assets/images/logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://japhethjerry.space",
    siteName: "Japheth Jerry Portfolio",
    title: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    description: "Co-Founder & CTO at Qallie, Software Engineer and Uprising CyberSecurity Profesional. Specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Portfolio_OG.png",
        width: 1200,
        height: 630,
        alt: "Japheth Jerry - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    description: "Co-Founder & CTO at Qallie, Software Engineer and Uprising CyberSecurity Profesional. Specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/c/c2/Portfolio_OG.png"],
    creator: "@Yafet_Tim",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "gMDB2iuMZJ10xon3Ud-OvJj41EZMhh7W0nAs7Irpt0w",
  },
  alternates: {
    canonical: "https://japhethjerry.space",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Favicon Links */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo.png" />
        <link rel="icon" type="image/svg+xml" href="/assets/images/logo.svg" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* External Stylesheets */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Japheth Jerry",
              "alternateName": [
                "Timileyin", 
                "Oluwatimileyin", 
                "Japheth Oluwatimileyin Jerry", 
                "Japheth Jerry",
                "Yafet",
                "Prince Yafet"
              ],
              "jobTitle": "Co-Founder & CTO at Qallie, Software Engineer",
              "description": "Co-Founder & CTO at Qallie, Software Engineer and Uprising CyberSecurity Professional. Specializing in React, TypeScript, Next.js, and modern cross-platform web, computer and mobile development.",
              "url": "https://japhethjerry.space",
              "image": {
                "@type": "ImageObject",
                "url": "https://japhethjerry.space/assets/images/me2.png",
                "width": 400,
                "height": 400,
                "caption": "Japheth Jerry - Software Engineer and Co-Founder of Qallie"
              },
              "sameAs": [
                "https://www.wikidata.org/wiki/Q135583647",
                "https://www.linkedin.com/in/japheth-jerry-34a513274/",
                "https://www.instagram.com/_prince_yafet/",
                "https://x.com/Yafet_Tim",
                "https://japhethjerry.space/",
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
            })
          }}
        />

        {/* Additional structured data for profile image optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              "name": "Japheth Jerry Profile Photo",
              "description": "Japheth Jerry - Software Engineer and Co-Founder of Qallie",
              "url": "https://japhethjerry.space/assets/images/me2.png",
              "width": 400,
              "height": 400,
              "caption": "Japheth Jerry - Software Engineer and Co-Founder of Qallie",
              "creator": {
                "@type": "Person",
                "name": "Japheth Jerry"
              },
              "license": "https://japhethjerry.space",
              "thumbnailUrl": "https://japhethjerry.space/assets/images/me2.png",
              "contentUrl": "https://japhethjerry.space/assets/images/me2.png",
              "creditText": "Japheth Jerry",
              "copyrightNotice": "© 2024 Japheth Jerry. All rights reserved.",
              "acquireLicensePage": "https://japhethjerry.space"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Japheth Jerry Portfolio",
              "url": "https://japhethjerry.space",
              "logo": "https://japhethjerry.space/assets/images/logo.svg",
              "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development. Co-founder of Qallie.",
              "founder": {
                "@type": "Person",
                "name": "Japheth Jerry"
              },
              "sameAs": [
                "https://www.wikidata.org/wiki/Q135583647",
                "https://www.linkedin.com/in/japheth-jerry-34a513274/",
                "https://www.instagram.com/_prince_yafet/",
                "https://x.com/Yafet_Tim",
                "https://japhethjerry.space/",
                "https://qallie.online"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Qallie",
              "url": "https://qallie.online",
              "description": "Technology company focused on innovative solutions",
              "founder": {
                "@type": "Person",
                "name": "Japheth Jerry",
                "jobTitle": "Co-founder"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Japheth Jerry Portfolio",
              "url": "https://japhethjerry.space",
              "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development",
              "author": {
                "@type": "Person",
                "name": "Japheth Jerry"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Japheth Jerry Portfolio"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://japhethjerry.space/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Additional SEO Schema for better search rankings */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Japheth Jerry Portfolio",
              "author": {
                "@type": "Person",
                "name": "Japheth Jerry",
                "alternateName": ["Japheth Jerry", "Yafet", "Prince Yafet"],
                "jobTitle": "Software Engineer",
                "description": "Co-Founder & CTO at Qallie, Software Engineer and Uprising Cybersecurity Professional"
              },
              "description": "Portfolio website of Japheth Jerry - Software Engineer specializing in React, TypeScript, and modern web development",
              "url": "https://japhethjerry.space",
              "mainEntity": {
                "@type": "Person",
                "name": "Japheth Jerry",
                "jobTitle": "Software Engineer",
                "description": "Co-Founder & CTO at Qallie, Software Engineer and Uprising Cybersecurity Professional"
              }
            })
          }}
        />
      </head>
      <body>
        <NextTopLoader color="#ffbc5e" showSpinner={false} />

        <ClientLayout>
          {children}
        </ClientLayout>
        
        {/* Scripts */}
        <script src="/assets/js/jquery-3.6.4.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/aos.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/cursor.js"></script>
      </body>
    </html>
  );
}