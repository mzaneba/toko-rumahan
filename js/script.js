(function () {
  "use strict";

  /* fungsi sccroll navbar */
  const handleNavbarScroll = () => {
    const navbar = document.querySelector(".navbar");
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  /* fungsi scroll button */
  const handleScrollTopBtn = () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  };

  /* inisialisai scroll button */
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

  /* auto close navbar pada mobile */
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

  /* set active link navbar */
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

  /* animasi saat scroll */
  const animateOnScroll = () => {};

  /* handler utama scroll */
  const handleScroll = () => {
    handleNavbarScroll();
    handleScrollTopBtn();
  };

  /* inisialisasi fungsi */
  const init = () => {
    setActiveNavLink();
    initScrollTopBtn();
    autoCloseNavbar();
    animateOnScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    console.log("Toko Zaneba - Website berhasil dimuat!");
  };

  /* jalankan saat ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
