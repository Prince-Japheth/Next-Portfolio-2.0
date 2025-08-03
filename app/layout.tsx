import type { Metadata } from "next";
import type React from "react"; // Import React
import ClientLayout from "./components/ClientLayout";
// import Breadcrumbs from "./components/Breadcrumbs";
import "./globals.css"; // Add this import for global styles
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL('https://japhethjerry.space'), // Replace with your actual domain
  title: {
    default: "Japheth Jerry - Software Engineer | React, Next.js, TypeScript Developer",
    template: "%s | Japheth Jerry"
  },
  description: "Software Engineer specializing in React, Next.js, TypeScript, and modern web development. View my portfolio, projects, and professional experience.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://japhethjerry.space",
    siteName: "Japheth Jerry Portfolio",
    title: "Japheth Jerry - Software Engineer | React, Next.js, TypeScript Developer",
    description: "Software Engineer specializing in React, Next.js, TypeScript, and modern web development. View my portfolio, projects, and professional experience.",
    images: [
      {
        url: "/assets/images/project_0.png",
        width: 1200,
        height: 630,
        alt: "Japheth Jerry - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Jerry - Software Engineer | React, Next.js, TypeScript Developer",
    description: "Software Engineer specializing in React, Next.js, TypeScript, and modern web development. View my portfolio, projects, and professional experience.",
    images: ["/assets/images/project_0.png"], // Same as OpenGraph
    creator: "@japhethjerry", // Replace with your Twitter handle
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
    // Add other verification codes as needed
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
      <meta name="google-site-verification" content="gMDB2iuMZJ10xon3Ud-OvJj41EZMhh7W0nAs7Irpt0w" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
        <link rel="shortcut icon" href="/assets/images/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <NextTopLoader color="#ffbc5e" showSpinner={false} /> 
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Japheth Jerry",
              "jobTitle": "Software Engineer",
              "description": "Software Engineer specializing in React, Next.js, TypeScript, and modern web development",
              "url": "https://japhethjerry.space",
              "image": "https://japhethjerry.space/assets/images/project_0.png",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q135583647",
                "https://www.linkedin.com/in/japheth-jerry-34a513274/",
                "https://www.instagram.com/_prince_yafet/",
                "https://japhethjerry.space/",
                "https://qallie.online"
              ],
              "knowsAbout": [
                "React",
                "Next.js", 
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Web Development",
                "Frontend Development",
                "Full Stack Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Japheth Jerry Portfolio",
              "url": "https://japhethjerry.space",
              "logo": "https://japhethjerry.space/assets/images/logo.png",
              "description": "Software Engineer specializing in React, Next.js, TypeScript, and modern web development",
              "founder": {
                "@type": "Person",
                "name": "Japheth Jerry"
              },
              "sameAs": [
                "https://www.linkedin.com/in/japheth-jerry-34a513274/",
                "https://www.instagram.com/_prince_yafet/",
                "https://qallie.online"
              ]
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Japheth Jerry Portfolio",
              "url": "https://japhethjerry.space",
              "description": "Software Engineer specializing in React, Next.js, TypeScript, and modern web development",
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
        
        <ClientLayout>
          {/* <Breadcrumbs /> */}
          {children}
        </ClientLayout>
        <script src="/assets/js/jquery-3.6.4.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/aos.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/cursor.js"></script>
      </body>
    </html>
  );
}
