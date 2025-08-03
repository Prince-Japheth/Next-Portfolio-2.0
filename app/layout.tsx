import type { Metadata } from "next";
import type React from "react"; // Import React
import ClientLayout from "./components/ClientLayout";
// import Breadcrumbs from "./components/Breadcrumbs";
import "./globals.css"; // Add this import for global styles
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL('https://japhethjerry.space'), // Replace with your actual domain
  title: {
    default: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    template: "%s | Japheth Jerry"
  },
  description: "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
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
    title: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    description: "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
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
    title: "Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer",
    description: "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development.",
    images: ["/assets/images/project_0.png"], // Same as OpenGraph
    creator: "@Yafet_Tim", // Replace with your Twitter handle
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
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer</title>
        <meta name="description" content="Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development." />
        <meta name="google-site-verification" content="gMDB2iuMZJ10xon3Ud-OvJj41EZMhh7W0nAs7Irpt0w" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://japhethjerry.space" />
        <meta property="og:site_name" content="Japheth Jerry Portfolio" />
        <meta property="og:title" content="Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer" />
        <meta property="og:description" content="Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development." />
        <meta property="og:image" content="https://japhethjerry.space/assets/images/project_0.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Japheth Jerry - Software Engineer Portfolio" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content="https://japhethjerry.space/assets/images/project_0.png" />
        <meta property="og:image:url" content="https://japhethjerry.space/assets/images/project_0.png" />
        <meta property="og:image:caption" content="Japheth Jerry - Software Engineer Portfolio" />
        <meta property="og:image:description" content="Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development." />
        <meta property="og:image:title" content="Japheth Jerry - Software Engineer Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Japheth Jerry - Computer Software Engineer & Uprising Cybersecurity Professional | React, TypeScript Developer" />
        <meta name="twitter:description" content="Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development." />
        <meta name="twitter:image" content="https://japhethjerry.space/assets/images/project_0.png" />
        <meta name="twitter:creator" content="@Yafet_Tim" />

        {/* Robots and SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://japhethjerry.space" />
        <meta name="category" content="technology" />

        {/* Favicon and Icons */}
        <link rel="icon" type="image/svg+xml" href="/assets/images/logo.svg" />
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
        <link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png" />

        {/* Fonts and Styles */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
              "jobTitle": "Software Engineer & Co-founder",
              "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development. Co-founder of Qallie, a technology company focused on innovative solutions.",
              "url": "https://japhethjerry.space",
              "image": "https://japhethjerry.space/assets/images/project_0.png",
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

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Japheth Jerry",
              "jobTitle": "Software Engineer & Co-founder",
              "description": "Software Engineer specializing in React, TypeScript, and modern cross-platform web, computer and mobile development. Co-founder of Qallie, a technology company focused on innovative solutions.",
              "url": "https://japhethjerry.space",
              "image": "https://japhethjerry.space/assets/images/project_0.png",
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

        {/* Qallie Organization Schema */}
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

        {/* WebSite Schema */}
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
