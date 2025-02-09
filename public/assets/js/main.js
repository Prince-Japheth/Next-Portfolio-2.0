;(function($) {
    $(document).ready(function() {
        // Mobile menu toggle
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        // Handle preloader removal
        function removePreloader() {
            setTimeout(function() {
                document.getElementById("preloader")?.classList.add("off");
                
                setTimeout(function() {
                    AOS.init({
                        duration: 1500,
                        once: false,
                    });
                }, 500);
            }, 500);
        }

        // Remove preloader when page is fully loaded
        window.addEventListener('load', removePreloader);

        // Expose for Next.js route changes
        window.showPreloader = function() {
            const preloader = document.getElementById("preloader");
            if (preloader) {
                preloader.classList.remove("off");
                removePreloader();
            }
        };
    });
})(jQuery);