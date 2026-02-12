(function () {
  "use strict";

  /* FUNGSI UNTUK SCROLL NAVBAR */
  const handleNavbarScroll = () => {
    const navbar = document.querySelector(".navbar");
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  /* FUNGSI UNTUK SCROLL BUTTON */
  const handleScrollTopBtn = () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  };

  /* INISIALISASI SCROLL BUTTON */
  const initScrollTopBtn = () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  };

  /* AUTO CLOSE NAVBAR (MOBILE) */
  const autoCloseNavbar = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
          }
        }
      });
    });
  };

  /* SET ACTIVE LINK NAVBAR */
  const setActiveNavLink = () => {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  };

  /* HANDLER UTAMA UNTUK SCROLL EVENT */
  const handleScroll = () => {
    handleNavbarScroll();
    handleScrollTopBtn();
  };

  /* INISIALISASI SEMUA FUNGSI */
  const init = () => {
    setActiveNavLink();
    initScrollTopBtn();
    autoCloseNavbar();
    animateOnScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    console.log("Toko Zaneba - Website berhasil dimuat!");
  };

  /* JALANKAN SAAT DOM READY */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
