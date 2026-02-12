(function () {
  "use strict";

  /* ANIMASI SCROLL REVEAL */
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
      ".timeline-item, .vm-card, .advantage-card, .gallery-item",
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      observer.observe(el);
    });
  };

  /* GALERI LIGHTBOX EFFECT */
  const initGallery = () => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const img = this.querySelector("img");
        const caption = this.querySelector(".gallery-caption h5");
        console.log(
          "Gallery clicked:",
          caption ? caption.textContent : "Image",
        );

        // Animasi klik
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 200);
      });
    });
  };

  /* SMOOTH HOVER EFFECT */
  const initHoverEffects = () => {
    const cards = document.querySelectorAll(
      ".advantage-card, .vm-card, .gallery-item",
    );

    cards.forEach((card) => {
      card.style.transition = "all 0.3s ease";
    });
  };

  /* INISIALISASI SEMUA FUNGSI */
  const init = () => {
    animateOnScroll();
    initGallery();
    animateCounters();
    initHoverEffects();

    console.log("About page - Animations & interactions ready!");
  };

  /* JALANKAN SAAT DOM READY */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
