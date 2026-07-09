"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Particles from "./Particles";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./ui/Preloader";
import MinimizedBrowsers from "./MinimizedBrowsers";
import { useLoading } from "../context/LoadingContext";
import ThemeEffects from "./ThemeEffects";

import AOS from "aos";
import "aos/dist/aos.css";

export function ClientLayoutBody({ children, isClient }: { children: React.ReactNode, isClient: boolean }) {
  const pathname = usePathname();
  const { isLoading } = useLoading();

  useEffect(() => {
    // Defer AOS init until after first paint to avoid TBT impact
    const t = setTimeout(() => {
      AOS.init({
        duration: 600,
        once: true,
        easing: 'ease-out-cubic',
        offset: 50,
      });
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="cursor d-none d-md-block" />
      <ThemeEffects />
      
      {!isLoading && isClient && (
        <Particles
          particleCount={80}
          scrollFactor={1.5}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#ffffff']}
          className="pointer-events-none"
        />
      )}

      {/* Background overlay for particles to ensure readability */}
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1, 
          pointerEvents: 'none' 
        }} 
      />

      <Preloader />
      
      <main className="main-homepage" style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <Header />
        
        <div id="content-root" className="content-wrapper">
          {children}
        </div>
        
        {!pathname?.startsWith('/v/') && <Footer />}
      </main>
      
      <MinimizedBrowsers />
    </>
  );
}
