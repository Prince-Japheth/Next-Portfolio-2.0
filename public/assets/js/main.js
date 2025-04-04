; (function ($) {
    $(document).ready(function () {
        // Mobile menu toggle
        $(document).on('click', '.header-area .show-menu', function () {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        // Handle preloader removal
        function removePreloader() {
            setTimeout(function () {
                document.getElementById("preloader")?.classList.add("off");

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