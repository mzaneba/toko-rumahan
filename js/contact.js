(function () {
  "use strict";

  /* validasi nomor hp */
  const validatePhoneNumber = () => {
    const phoneInput = document.getElementById("phone");

    if (!phoneInput) return;

    phoneInput.addEventListener("input", function (e) {
      this.value = this.value.replace(/[^0-9]/g, "");
      if (this.value.length > 15) {
        this.value = this.value.slice(0, 15);
      }
    });
  };

  /* animasi scroll */
  const animateOnScroll = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const elements = document.querySelectorAll(
      ".info-card, .contact-form-card, .accordion-item",
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      observer.observe(el);
    });
  };

  /* smooth scroll ke form */
  const initScrollToForm = () => {
    if (window.location.hash === "#contact") {
      const formSection = document.querySelector(".contact-form-section");
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  };

  /* google maps interaction */
  const initMapInteraction = () => {
    const mapContainer = document.querySelector(".map-container");

    if (!mapContainer) return;

    const iframe = mapContainer.querySelector("iframe");

    if (iframe) {
      mapContainer.addEventListener("click", function () {
        iframe.style.pointerEvents = "auto";
      });

      mapContainer.addEventListener("mouseleave", function () {
        iframe.style.pointerEvents = "none";
      });

      iframe.style.pointerEvents = "none";
    }
  };

  /* faq accordion tracking */
  const trackAccordionClicks = () => {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const faqTitle = this.textContent.trim();
        console.log("FAQ clicked:", faqTitle);
      });
    });
  };

  /* inisialisasi semua fungsi */
  const init = () => {
    handleContactForm();
    validatePhoneNumber();
    animateOnScroll();
    initScrollToForm();
    initMapInteraction();
    trackAccordionClicks();

    console.log("Contact page - Form & interactions ready!");
  };

  /* jalankan saat ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
