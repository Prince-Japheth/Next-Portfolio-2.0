import type { Metadata } from "next";
import type React from "react"; // Import React
import ClientLayout from "./components/ClientLayout";
import "./globals.css"; // Add this import for global styles
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Japheth Jerry - Software Engineer",
  description: "Japheth Jerry Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
        <ClientLayout>{children}</ClientLayout>
        <script src="/assets/js/jquery-3.6.4.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/aos.js"></script>
        <script src="/assets/js/main.js"></script>
        <script src="/assets/js/cursor.js"></script>
      </body>
    </html>
  );
}
