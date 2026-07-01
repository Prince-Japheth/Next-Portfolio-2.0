"use client";

import { useEffect } from "react";
import gsap from "gsap";

const ThemeEffects = () => {
  useEffect(() => {
    // 1. Audio Intro Logic
    let hasPlayedIntroAudio = localStorage.getItem("hasPlayedIntroAudio") === "true";

    if (!hasPlayedIntroAudio) {
      const playIntroAudio = () => {
        const introAudio = new Audio("/assets/audio/intro.mp3");
        introAudio.volume = 0.3;
        introAudio
          .play()
          .then(() => {
            localStorage.setItem("hasPlayedIntroAudio", "true");
          })
          .catch(() => {
            // Provide feedback via DOM state for any UI listeners
            document.body.dataset.audioError = "true";
          });
        document.removeEventListener("click", playIntroAudio);
        document.removeEventListener("keydown", playIntroAudio);
        document.removeEventListener("touchstart", playIntroAudio);
      };

      document.addEventListener("click", playIntroAudio, { once: true });
      document.addEventListener("keydown", playIntroAudio, { once: true });
      document.addEventListener("touchstart", playIntroAudio, { once: true });
    }

    // 2. Cursor Effect Logic
    const initCursorEffect = () => {
      const cursor = document.querySelector(".cursor");
      if (!cursor) return;

      const cursorScale = document.querySelectorAll(
        "a, Link, button, .img-box, .image-inner img, p, h1, h2, h3, h4, h5, .pop-up, .trigger, .share, #close, .toggle, #vimeo, #youtube, .link, .gallery"
      );
      let mouseX = 0;
      let mouseY = 0;

      // Follow mouse movement
      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      window.addEventListener("mousemove", onMouseMove);

      // Animation Loop
      const ticker = gsap.to(
        {},
        {
          duration: 0.016,
          repeat: -1,
          onRepeat: () => {
            gsap.set(cursor, {
              css: {
                left: mouseX,
                top: mouseY,
              },
            });
          },
        }
      );

      // Handle hover effects
      cursorScale.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          cursor.classList.add("grow");
          if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
          }
        });

        link.addEventListener("mouseleave", () => {
          cursor.classList.remove("grow");
          cursor.classList.remove("grow-small");
        });
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        ticker.kill();
      };
    };

    // Initialize cursor
    const cleanupCursor = initCursorEffect();

    // Expose reinit function for route changes
    if (typeof window !== "undefined") {
      window.reinitCursorEffect = () => {
        setTimeout(initCursorEffect, 100);
      };
    }

    return () => {
      if (cleanupCursor) cleanupCursor();
    };
  }, []);

  return null;
};

export default ThemeEffects;
