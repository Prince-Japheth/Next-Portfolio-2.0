"use client";

import React, { useEffect, useState } from "react";
import Particles from "./Particles";
import Header from "./Header";
import Footer from "./Footer";
import { useRouteChange } from "../hooks/useRouteChange";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useRouteChange(); // Use our custom hook to handle route changes
  const [isClient, setIsClient] = useState(false);
  
  // Only render cursor on client-side to avoid hydration errors
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <>
      {isClient && <div className="cursor"></div>}
      <div id="preloader" className="preloader">
        <div className="black_wall"></div>
        <div className="loader"></div>
        <div id="wifi-loader">
          <svg className="circle-outer" viewBox="0 0 86 86">
            <circle className="back" cx="43" cy="43" r="40" />
            <circle className="front" cx="43" cy="43" r="40" />
            <circle className="glow" cx="43" cy="43" r="40" />
          </svg>
          <svg className="circle-middle" viewBox="0 0 60 60">
            <circle className="back" cx="30" cy="30" r="27" />
            <circle className="front" cx="30" cy="30" r="27" />
            <circle className="glow" cx="30" cy="30" r="27" />
          </svg>
          <svg className="circle-inner" viewBox="0 0 34 34">
            <circle className="back" cx="17" cy="17" r="14" />
            <circle className="front" cx="17" cy="17" r="14" />
            <circle className="glow" cx="17" cy="17" r="14" />
          </svg>
          <div className="text" data-text="Loading" />
        </div>
      </div>
      <main className="main-homepage">
        <Particles
          particleCount={200}
          scrollFactor={1.5}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#ffffff']}
        />
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
} 