"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Terminal from "./Terminal";

declare global {
  interface Window {
    showPreloader: () => void;
    reinitCursorEffect?: () => void;
  }
}

const Header = () => {
  const pathname = usePathname();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Current pathname:', pathname);
  }, [pathname]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && window.showPreloader) {
        window.showPreloader();
      }

      // Reinitialize cursor effect on route change
      if (typeof window !== "undefined" && window.reinitCursorEffect) {
        window.reinitCursorEffect();
      }
    };

    handleRouteChange(); // Initial load

    // Add event listener for route changes
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsAboutDropdownOpen(false);
  }, [pathname]);

  const isAboutPage = pathname === "/about";
  const isResumePage = pathname === "/resume";

  return (
    <>
      <header className="header-area">
        <div className="container">
          <div className="gx-row d-flex align-items-center justify-content-between">
            <Link href="/" legacyBehavior>
              <a className="logo">
                <img src="/assets/images/logo.svg" alt="Logo" />
              </a>
            </Link>

            <nav className="navbar">
              <ul className="menu">
                <li className={pathname === "/" ? "active" : ""}>
                  <Link href="/" legacyBehavior>
                    <a>Home</a>
                  </Link>
                </li>
                <li className={pathname === "/about" ? "active d-none d-md-block" : "d-none d-md-block"}>
                  <Link href="/about" legacyBehavior>
                    <a>About</a>
                  </Link>
                </li>
                <li className={pathname === "/about" || pathname === "/resume" ? "active d-block d-md-none" : "d-block d-md-none"}>
                  <div className="about-dropdown-container" ref={dropdownRef}>
                    <a
                      className="about-link d-block d-md-none"
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    >
                      About
                    </a>
                    <div className={`about-dropdown ${isAboutDropdownOpen ? 'visible' : 'hidden'}`}>
                      <Link href="/about" legacyBehavior>
                        <a className={`dropdown-item ${pathname === "/about" ? "active-about" : ""}`}>About Me</a>
                      </Link>
                      <Link href="/resume" legacyBehavior>
                        <a className={`dropdown-item ${pathname === "/resume" ? "active-resume" : ""}`}>Resume</a>
                      </Link>
                    </div>
                    <div className="d-none d-md-block">
                      <Link href="/about" legacyBehavior>
                        <a className={pathname === "/about" ? "active" : ""}>About</a>
                      </Link>
                    </div>
                  </div>
                </li>
                <li className={pathname === "/resume" ? "active d-none d-md-block" : "d-none d-md-block"}>
                  <Link href="/resume" legacyBehavior>
                    <a>Resume</a>
                  </Link>
                </li>
                <li className={pathname === "/projects" || pathname.startsWith("/projects/") ? "active" : ""}>
                  <a href="/projects">Projects</a>
                </li>
                <li className={pathname === "/contact" ? "active" : ""}>
                  <Link href="/contact" legacyBehavior>
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <Link href="/contact" legacyBehavior>
              <a className="theme-btn">Let's talk</a>
            </Link>

            <div className="show-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>


      <div className="terminal-button-container">
        <button
          className="terminal-button"
          onClick={() => setIsTerminalOpen(true)}
        > 
          <i className="iconoir-terminal" style={{ fontSize: '24px', color: '#fff' }} />
        </button>

      </div>

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </>
  );
};

export default Header;