; (function ($) {
    $(document).ready(function () {
        // Mobile menu toggle
        $(document).on('click', '.header-area .show-menu', function () {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        // Track if audio has been played using localStorage
        let hasPlayedIntroAudio = localStorage.getItem('hasPlayedIntroAudio') === 'true';
        
        // For debugging: uncomment the line below to reset the audio state
        // localStorage.removeItem('hasPlayedIntroAudio');

        // Handle preloader removal
        function removePreloader() {
            setTimeout(function () {
                document.getElementById("preloader")?.classList.add("off");

                // Play intro audio only on initial site load, not on navigation
                if (!hasPlayedIntroAudio) {
                    setTimeout(function () {
                        const introAudio = new Audio('/assets/audio/intro.mp3');
                        introAudio.volume = 0.3; // Set volume to 30%
                        
                        // Play audio with user interaction requirement
                        const playIntroAudio = () => {
                            introAudio.play().catch(function(error) {
                                console.log('Audio play failed:', error);
                            });
                            // Remove the event listener after first interaction
                            document.removeEventListener('click', playIntroAudio);
                            document.removeEventListener('keydown', playIntroAudio);
                            document.removeEventListener('touchstart', playIntroAudio);
                        };
                        
                        // Add event listeners for user interaction
                        document.addEventListener('click', playIntroAudio, { once: true });
                        document.addEventListener('keydown', playIntroAudio, { once: true });
                        document.addEventListener('touchstart', playIntroAudio, { once: true });
                        
                        // Also try to play immediately (may work if user has already interacted)
                        introAudio.play().catch(function(error) {
                            console.log('Initial audio play failed, waiting for user interaction');
                        });
                        
                        // Mark as played and save to localStorage
                        hasPlayedIntroAudio = true;
                        localStorage.setItem('hasPlayedIntroAudio', 'true');
                    }, 300); // Play audio 300ms after preloader disappears
                }

                setTimeout(function () {
                    AOS.init({
                        duration: 1500,
                        once: true,
                    });
                }, 500);
            }, 500);
        }

        // Remove preloader when page is fully loaded
        window.addEventListener('load', removePreloader);

        // Expose for Next.js route changes
        window.showPreloader = function () {
            const preloader = document.getElementById("preloader");
            if (preloader) {
                preloader.classList.remove("off");
                removePreloader();
            }
        };

        // Initialize cursor effect
        function initCursorEffect() {
            let cursor = document.querySelector('.cursor');
            if (!cursor) return;
            
            let cursorScale = document.querySelectorAll('a,Link,button,.img-box,.image-inner img, p,h1,h2,h3,h4,h5,.pop-up,.trigger,.share,#close,.toggle,#vimeo,#youtube,.link,.gallery');
            let mouseX = 0;
            let mouseY = 0;

            gsap.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    gsap.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY,
                        }
                    })
                }
            });

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            cursorScale.forEach(link => {
                link.addEventListener('mousemove', () => {
                    cursor.classList.add('grow');
                    if (link.classList.contains('small')) {
                        cursor.classList.remove('grow');
                        cursor.classList.add('grow-small');
                    }
                });

                link.addEventListener('mouseleave', () => {
                    cursor.classList.remove('grow');
                    cursor.classList.remove('grow-small');
                });
            });
        }

        // Initialize cursor effect on page load
        // Wait a bit to ensure the cursor element is available
        setTimeout(initCursorEffect, 100);

        // Reinitialize cursor effect on Next.js route changes
        if (typeof window !== 'undefined') {
            // Listen for Next.js route change events
            window.addEventListener('popstate', function() {
                setTimeout(initCursorEffect, 100);
            });
            
            // Expose function for Next.js to call on route changes
            window.reinitCursorEffect = function() {
                setTimeout(initCursorEffect, 100);
            };
        }
    });
})(jQuery);