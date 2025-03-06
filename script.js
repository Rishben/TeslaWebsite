    // Navbar scroll effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            document.querySelector(".navbar").classList.add("scrolled");
        } else {
            document.querySelector(".navbar").classList.remove("scrolled");
        }
    });

    // Smooth scrolling for navbar links
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                var targetId = this.getAttribute("href").substring(1);
                var targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Fade-in animations on scroll
        function fadeInOnScroll() {
            document.querySelectorAll(".fade-in-up").forEach(function (element) {
                var elementTop = element.getBoundingClientRect().top;
                var elementBottom = elementTop + element.offsetHeight;
                var viewportTop = 0;
                var viewportBottom = window.innerHeight;

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    element.classList.add("active");
                }
            });
        }

        window.addEventListener("scroll", fadeInOnScroll);
        
        // Trigger initial scroll check
        fadeInOnScroll();
    });
