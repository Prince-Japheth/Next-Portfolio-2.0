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
          description: "Co-Founder & CTO at Qallie, Software Engineer at Popkup. Specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
  keywords: [
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
    "Full Stack Developer"
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
        url: '/assets/images/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/images/logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/assets/images/logo.png',
    shortcut: '/assets/images/logo.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://japhethjerry.space",
    siteName: "Japheth Jerry Portfolio",
    title: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    description: "Co-Founder & CTO at Qallie, Software Engineer at Popkup. Specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
    images: [
      {
        url: "https://japhethjerry.space/assets/images/project_0.png",
        width: 1200,
        height: 630,
        alt: "Japheth Jerry - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    description: "Co-Founder & CTO at Qallie, Software Engineer at Popkup. Specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
    images: ["https://japhethjerry.space/assets/images/project_0.png"],
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
              "jobTitle": "Co-Founder & CTO at Qallie, Software Engineer",
              "description": "Co-Founder & CTO at Qallie, Software Engineer at Popkup. Specializing in React, TypeScript, Next.js, and modern cross-platform web, computer and mobile development.",
              "url": "https://japhethjerry.space",
              "image": "https://japhethjerry.space/assets/images/me2.png",
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
                "Full Stack Development"
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
              }
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
                "https://www.linkedin.com/in/japheth-jerry-34a513274/",
                "https://www.instagram.com/_prince_yafet/",
                "https://x.com/Yafet_Tim",
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