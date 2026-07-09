import type { Metadata } from "next";
import type React from "react";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import StructuredData from "./components/seo/StructuredData";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.japhethjerry.space'),
  title: {
    default: "Japheth Jerry | Software Engineer & Security Specialist",
    template: "%s | Japheth Jerry"
  },
  description: "Software Engineer specializing in React, TypeScript, and secure cross-platform web development. Cyber Security expert.",
  keywords: [
    "Japheth",
    "Jerry",
    "Timileyin",
    "Oluwatimileyin",
    "Japheth Oluwatimileyin Jerry",
    "Japheth Jerry",
    "Qallie",
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
    "Cyber Security Specialist",
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
    // "qallie.vercel.app",
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
    url: "https://www.japhethjerry.space",
    siteName: "Japheth Jerry",
    title: "Japheth Jerry | Software Engineer & Security Specialist",
    description: "Software Engineer specializing in React, TypeScript, and secure cross-platform web development. Cyber Security expert.",
    images: [
      {
        url: "/assets/images/me.png",
        width: 1200,
        height: 1200,
        alt: "Japheth Jerry - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japheth Jerry | Software Engineer & Security Specialist",
    description: "Software Engineer specializing in React, TypeScript, and secure cross-platform web development. Cyber Security expert.",
    images: ["/assets/images/me.png"],
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
    canonical: "https://www.japhethjerry.space",
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

        {/* Fonts - non-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
        />
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </noscript>

        {/* External Stylesheets - all non-blocking */}
        <link rel="stylesheet" href="/assets/css/iconoir-subset.css" media="print" />
        <noscript><link rel="stylesheet" href="/assets/css/iconoir-subset.css" /></noscript>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" media="print" />
        <noscript><link rel="stylesheet" href="/assets/css/bootstrap.min.css" /></noscript>
        <link rel="stylesheet" href="/assets/css/style.css" media="print" />
        <noscript><link rel="stylesheet" href="/assets/css/style.css" /></noscript>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var links = document.querySelectorAll('link[media="print"]');
              links.forEach(function(link) { link.media = 'all'; });
            })();
          `
        }} />

        {/* SEO - Site Name Optimization */}
        <meta property="og:site_name" content="Japheth Jerry" />

        {/* Structured Data for SEO */}
        <StructuredData />

        {/* Fallback for bots and crawlers without JS or that are headless */}
        <noscript>
          <style>{`
            .preloader { display: none !important; }
            [data-aos], [data-aos^=fade][data-aos^=fade], [data-aos^=zoom][data-aos^=zoom], [data-aos^=slide][data-aos^=slide], [data-aos^=flip][data-aos^=flip] { 
              opacity: 1 !important; 
              visibility: visible !important; 
              transform: none !important; 
              transition: none !important; 
            }
          `}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var ua = navigator.userAgent || '';
                var isBot = /bot|crawler|spider|crawling|googlebot|bingbot|yandexbot|duckduckbot|slurp|ia_archiver|lighthouse|page-speed/i.test(ua) || /chatgpt|ai|openai|anthropic|claude/i.test(ua);
                if (isBot || window.navigator.webdriver) {
                  document.documentElement.classList.add('is-bot');
                }
              })();
            `,
          }}
        />
        <style>{`
          html.is-bot .preloader { display: none !important; }
          html.is-bot [data-aos], 
          html.is-bot [data-aos^=fade][data-aos^=fade], 
          html.is-bot [data-aos^=zoom][data-aos^=zoom], 
          html.is-bot [data-aos^=slide][data-aos^=slide], 
          html.is-bot [data-aos^=flip][data-aos^=flip] { 
            opacity: 1 !important; 
            visibility: visible !important; 
            transform: none !important; 
            transition: none !important; 
          }
        `}</style>
      </head>
      <body>
        <NextTopLoader color="#ffbc5e" showSpinner={false} />

        <ClientLayout>
          {children}
        </ClientLayout>

        {/* Optimized Scripts */}
      </body>
    </html>
  );
}
