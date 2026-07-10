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

        {/* Fonts — preload for early fetch, stylesheet for application */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* External Stylesheets */}
        <link rel="stylesheet" href="/assets/css/iconoir-subset.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.min.css" />

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

          /* Critical preloader styles – inlined so the spinner is visible
             immediately during SSR→hydration before style.css loads */

          /* Critical preloader styles — inlined for immediate visibility */
          .preloader {
            position: fixed;
            top: 0; right: 0; bottom: 0; left: 0;
            background-color: #111;
            transform-origin: bottom;
            z-index: 111111;
          }
          .preloader .black_wall {
            height: 100%;
            background-color: #222;
            transform-origin: top;
            animation: preloader_slide 0.5s ease-in-out 0s 1 normal both;
          }
          /* Exit: fade the whole preloader out (no slide/glitch) */
          .preloader.off {
            animation: preloader-fade-out 0.6s ease both;
          }
          @keyframes preloader-fade-out {
            from { opacity: 1; }
            to   { opacity: 0; }
          }
          @keyframes preloader_slide {
            from { transform: scaleY(1); }
            to   { transform: scaleY(0); }
          }
          #wifi-loader {
            --primary_color: #ffbc5e;
            --front-color: var(--primary_color);
            --back-color: rgba(255,188,94,0.2);
            --text-color: rgba(255,188,94,0.5);
            width: 86px; height: 86px;
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #wifi-loader svg {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #wifi-loader svg circle {
            fill: none;
            stroke-width: 6px;
            stroke-linecap: round;
            stroke-linejoin: round;
            transform-origin: center;
          }
          #wifi-loader svg.circle-outer  { height: 86px; width: 86px; animation: rotate-outer 4.1s linear infinite; }
          #wifi-loader svg.circle-middle  { height: 60px; width: 60px; animation: rotate-middle 3.7s linear infinite; }
          #wifi-loader svg.circle-inner   { height: 34px; width: 34px; animation: rotate-inner 3.1s linear infinite; }
          #wifi-loader svg.circle-outer  circle { stroke-dasharray: 251; animation: dash-outer 3s ease-in-out infinite; }
          #wifi-loader svg.circle-middle circle { stroke-dasharray: 170; animation: dash-middle 2s ease-in-out infinite; }
          #wifi-loader svg.circle-inner  circle { stroke-dasharray: 88;  animation: dash-inner 1.5s ease-in-out infinite; }
          #wifi-loader svg.circle-outer  circle.back  { stroke: var(--back-color); }
          #wifi-loader svg.circle-middle circle.back  { stroke: var(--back-color); }
          #wifi-loader svg.circle-inner  circle.back  { stroke: var(--back-color); }
          #wifi-loader svg.circle-outer  circle.front { stroke: var(--front-color); }
          #wifi-loader svg.circle-middle circle.front { stroke: var(--front-color); }
          #wifi-loader svg.circle-inner  circle.front { stroke: var(--front-color); }
          #wifi-loader .text {
            position: absolute; bottom: -40px;
            display: flex; justify-content: center; align-items: center;
            text-transform: lowercase; font-weight: 500;
            font-size: 14px; letter-spacing: 0.2px;
          }
          #wifi-loader .text::before, #wifi-loader .text::after { content: attr(data-text); }
          #wifi-loader .text::before { color: var(--text-color); }
          #wifi-loader .text::after  { color: var(--front-color); animation: pulse 2s ease-in-out infinite; position: absolute; left: 0; }
          @keyframes rotate-outer  { 0%{transform:rotate(0deg) scale(1)} 33%{transform:rotate(120deg) scale(1.1)} 66%{transform:rotate(240deg) scale(0.9)} 100%{transform:rotate(360deg) scale(1)} }
          @keyframes rotate-middle { 0%{transform:rotate(360deg) scale(1)} 40%{transform:rotate(210deg) scale(0.9)} 80%{transform:rotate(60deg) scale(1.1)}  100%{transform:rotate(0deg) scale(1)} }
          @keyframes rotate-inner  { 0%{transform:rotate(0deg) scale(1)} 25%{transform:rotate(-90deg) scale(1.1)} 75%{transform:rotate(-270deg) scale(0.9)} 100%{transform:rotate(-360deg) scale(1)} }
          @keyframes dash-outer  { 0%{stroke-dasharray:25 100;stroke-dashoffset:0}  33%{stroke-dasharray:50 75;stroke-dashoffset:125}  66%{stroke-dasharray:25 100;stroke-dashoffset:-125} 100%{stroke-dasharray:25 100;stroke-dashoffset:0} }
          @keyframes dash-middle { 0%{stroke-dasharray:25 75;stroke-dashoffset:0}   40%{stroke-dasharray:50 50;stroke-dashoffset:-100} 80%{stroke-dasharray:25 75;stroke-dashoffset:100}  100%{stroke-dasharray:25 75;stroke-dashoffset:0} }
          @keyframes dash-inner  { 0%{stroke-dasharray:25 50;stroke-dashoffset:0}   25%{stroke-dasharray:35 40;stroke-dashoffset:75}   75%{stroke-dasharray:25 50;stroke-dashoffset:-75} 100%{stroke-dasharray:25 50;stroke-dashoffset:0} }
          @keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
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
