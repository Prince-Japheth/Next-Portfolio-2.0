"use client";

import React, { useEffect } from "react";

const Oneko = () => {
    useEffect(() => {
        const isReducedMotion =
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

        if (isReducedMotion) return;

        const nekoEl = document.createElement("div");
        let nekoPosX = 32;
        let nekoPosY = 32;
        let mousePosX = 0;
        let mousePosY = 0;
        let frameCount = 0;
        let idleTime = 0;
        let idleAnimation: string | null = null;
        let idleAnimationFrame = 0;
        const nekoSpeed = 10;

        const spriteSets: Record<string, number[][]> = {
            idle: [[-3, -3]],
            alert: [[-7, -3]],
            scratchSelf: [
                [-5, 0],
                [-6, 0],
                [-7, 0],
            ],
            scratchWallN: [
                [0, 0],
                [0, -1],
            ],
            scratchWallS: [
                [-7, -1],
                [-6, -2],
            ],
            scratchWallE: [
                [-2, -2],
                [-2, -3],
            ],
            scratchWallW: [
                [-4, 0],
                [-4, -1],
            ],
            tired: [[-3, -2]],
            sleeping: [
                [-2, 0],
                [-2, -1],
            ],
            N: [
                [-1, -2],
                [-1, -3],
            ],
            NE: [
                [0, -2],
                [0, -3],
            ],
            E: [
                [-3, 0],
                [-3, -1],
            ],
            SE: [
                [-5, -1],
                [-5, -2],
            ],
            S: [
                [-6, -3],
                [-7, -2],
            ],
            SW: [
                [-5, -3],
                [-6, -1],
            ],
            W: [
                [-4, -2],
                [-4, -3],
            ],
            NW: [
                [-1, 0],
                [-1, -1],
            ],
        };

        function setSprite(name: string, frame: number) {
            const sprite = spriteSets[name][frame % spriteSets[name].length];
            nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
        }

        function resetIdleAnimation() {
            idleAnimation = null;
            idleAnimationFrame = 0;
        }

        function idle() {
            idleTime += 1;

            // every ~ 20 seconds
            if (
                idleTime > 10 &&
                Math.floor(Math.random() * 200) === 0 &&
                idleAnimation === null
            ) {
                let avalibleIdleAnimations = ["sleeping", "tired"];
                if (nekoPosX < 32) avalibleIdleAnimations.push("scratchWallW");
                if (nekoPosY < 32) avalibleIdleAnimations.push("scratchWallN");
                if (nekoPosX > window.innerWidth - 32)
                    avalibleIdleAnimations.push("scratchWallE");
                if (nekoPosY > window.innerHeight - 32)
                    avalibleIdleAnimations.push("scratchWallS");

                idleAnimation =
                    avalibleIdleAnimations[
                    Math.floor(Math.random() * avalibleIdleAnimations.length)
                    ];
            }

            switch (idleAnimation) {
                case "sleeping":
                    if (idleAnimationFrame < 8) {
                        setSprite("tired", 0);
                        break;
                    }
                    setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
                    if (idleAnimationFrame > 192) {
                        resetIdleAnimation();
                    }
                    break;
                case "scratchWallN":
                case "scratchWallS":
                case "scratchWallE":
                case "scratchWallW":
                case "scratchSelf":
                    setSprite(idleAnimation, Math.floor(idleAnimationFrame / 4));
                    if (idleAnimationFrame > 9) {
                        resetIdleAnimation();
                    }
                    break;
                default:
                    setSprite("idle", 0);
                    return;
            }
            idleAnimationFrame += 1;
        }

        function frame() {
            frameCount += 1;
            const diffX = nekoPosX - mousePosX;
            const diffY = nekoPosY - mousePosY;
            const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

            if (distance < nekoSpeed || distance < 48) {
                idle();
                return;
            }

            idleAnimation = null;
            idleAnimationFrame = 0;

            if (idleTime > 1) {
                setSprite("alert", 0);
                // count down after being alerted before moving
                idleTime = Math.min(idleTime, 7);
                idleTime -= 1;
                return;
            }

            let direction = "";
            direction += diffY / distance > 0.5 ? "N" : "";
            direction += diffY / distance < -0.5 ? "S" : "";
            direction += diffX / distance > 0.5 ? "W" : "";
            direction += diffX / distance < -0.5 ? "E" : "";
            setSprite(direction, frameCount);

            nekoPosX -= (diffX / distance) * nekoSpeed;
            nekoPosY -= (diffY / distance) * nekoSpeed;

            nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
            nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

            nekoEl.style.left = `${nekoPosX - 16}px`;
            nekoEl.style.top = `${nekoPosY - 16}px`;
        }

        nekoEl.id = "oneko";
        nekoEl.style.width = "32px";
        nekoEl.style.height = "32px";
        nekoEl.style.position = "fixed";
        nekoEl.style.pointerEvents = "none";
        nekoEl.style.imageRendering = "pixelated";
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
        nekoEl.style.zIndex = "2147483647";
        nekoEl.style.backgroundImage = "url('/assets/images/oneko.gif')";

        document.body.appendChild(nekoEl);

        const handleMouseMove = (event: MouseEvent) => {
            mousePosX = event.clientX;
            mousePosY = event.clientY;
        };

        const handleTouch = (event: TouchEvent) => {
            if (event.touches.length > 0) {
                mousePosX = event.touches[0].clientX;
                mousePosY = event.touches[0].clientY;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("touchstart", handleTouch);
        document.addEventListener("touchmove", handleTouch);

        // Also look for iframes and attach listeners to them
        const attachToIframes = () => {
            const iframes = document.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                try {
                    // Only works if same-origin
                    if (iframe.contentDocument && !iframe.dataset.onekoAttached) {
                        iframe.contentDocument.addEventListener("mousemove", (e: MouseEvent) => {
                            const rect = iframe.getBoundingClientRect();
                            mousePosX = e.clientX + rect.left;
                            mousePosY = e.clientY + rect.top;
                        });
                        iframe.contentDocument.addEventListener("touchstart", (e: TouchEvent) => {
                            const rect = iframe.getBoundingClientRect();
                            if (e.touches.length > 0) {
                                mousePosX = e.touches[0].clientX + rect.left;
                                mousePosY = e.touches[0].clientY + rect.top;
                            }
                        });
                        iframe.contentDocument.addEventListener("touchmove", (e: TouchEvent) => {
                            const rect = iframe.getBoundingClientRect();
                            if (e.touches.length > 0) {
                                mousePosX = e.touches[0].clientX + rect.left;
                                mousePosY = e.touches[0].clientY + rect.top;
                            }
                        });
                        iframe.dataset.onekoAttached = "true";
                    }
                } catch (e) {
                    // console.warn("Could not attach Oneko to cross-origin iframe");
                }
            });
        };

        // Initial check
        attachToIframes();
        // Re-check periodically in case iframes are loaded dynamically
        const iframeInterval = setInterval(attachToIframes, 2000);

        let lastFrameTimestamp: number;
        let animationFrameId: number;

        function onAnimationFrame(timestamp: number) {
            if (!nekoEl.isConnected) return;
            if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
            if (timestamp - lastFrameTimestamp > 100) {
                lastFrameTimestamp = timestamp;
                frame();
            }
            animationFrameId = window.requestAnimationFrame(onAnimationFrame);
        }

        animationFrameId = window.requestAnimationFrame(onAnimationFrame);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("touchstart", handleTouch);
            document.removeEventListener("touchmove", handleTouch);
            clearInterval(iframeInterval);
            window.cancelAnimationFrame(animationFrameId);
            if (nekoEl.isConnected) {
                document.body.removeChild(nekoEl);
            }
        };
    }, []);

    return null;
};

export default Oneko;
