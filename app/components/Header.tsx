"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

declare global {
  interface Window {
    showPreloader: () => void;
  }
}

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && window.showPreloader) {
        window.showPreloader();
      }
    };

    handleRouteChange(); // Initial load

    // Add event listener for route changes
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname]);

  return (
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
              <li className={pathname === "/about" ? "active" : ""}>
                <Link href="/about" legacyBehavior>
                  <a>About</a>
                </Link>
              </li>
              <li className={pathname === "/projects" ? "active" : ""}>
                <Link href="/projects" legacyBehavior>
                  <a>Projects</a>
                </Link>
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
  );
};

export default Header;
