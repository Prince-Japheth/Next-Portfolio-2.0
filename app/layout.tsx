import type { Metadata } from "next";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type React from "react"; // Import React

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
        <title>Japheth - Software Engineer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
        <link rel="shortcut icon" href="./assets/images/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./assets/css/aos.css" />
        <link rel="stylesheet" href="./assets/css/style.css" />
      </head>
      <body>
        <div id="preloader" className="preloader">
          <div className="black_wall"></div>
          <div className="loader"></div>
          <div id="wifi-loader">
            <svg className="circle-outer" viewBox="0 0 86 86">
              <circle className="back" cx={43} cy={43} r={40} />
              <circle className="front" cx={43} cy={43} r={40} />
              <circle className="new" cx={43} cy={43} r={40} />
            </svg>
            <svg className="circle-middle" viewBox="0 0 60 60">
              <circle className="back" cx={30} cy={30} r={27} />
              <circle className="front" cx={30} cy={30} r={27} />
            </svg>
            <svg className="circle-inner" viewBox="0 0 34 34">
              <circle className="back" cx={17} cy={17} r={14} />
              <circle className="front" cx={17} cy={17} r={14} />
            </svg>
            <div className="text" data-text="Loading" />
          </div>
        </div>
        <main className="main-homepage">
          <Particles
            particleCount={200}
            scrollFactor={1.5} // Increase for more dramatic scroll effect
            particleSpread={10}
            speed={0.1}
            particleColors={['#ffffff', '#ffffff']}
          />
          <Header />
          {children}
          <Footer />
        </main>
        <script src="./assets/js/jquery-3.6.4.js"></script>
        <script src="./assets/js/bootstrap.bundle.min.js"></script>
        <script src="./assets/js/aos.js"></script>
        <script src="./assets/js/main.js"></script>
      </body>
    </html>
  );
}
