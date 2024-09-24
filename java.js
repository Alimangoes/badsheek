
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    function updateActiveLink() {
        const fromTop = window.scrollY +250;

        sections.forEach(section => {
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach(navLink => {
                    navLink.classList.remove("active");
                    if (section.id === navLink.getAttribute("href").substring(1)) {
                        navLink.classList.add("active");
                    }
                });
            }
        });
    }

    function smoothScrollToSection(targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop
        });
        updateActiveLink();
    }

    window.addEventListener("scroll", updateActiveLink);

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            smoothScrollToSection(targetSection);
        });
    });
});
function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const start = window.pageYOffset;
          const targetY = target.offsetTop;
          const duration = 700;

          function animateScroll(timestamp) {
            const currentTime = timestamp || new Date().getTime();
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = easeInOutQuad(progress);
            window.scrollTo(0, start + (targetY - start) * easedProgress);

            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          }

          const startTime = performance.now();
          requestAnimationFrame(animateScroll);
        }
      });
    });
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    links.classList.remove("active");
}))
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }    
        }
    }
