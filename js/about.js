(function () {
  "use strict";

  /* galeri lightbox effect */
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

        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 200);
      });
    });
  };

  /* smooth hoover efect */
  const initHoverEffects = () => {
    const cards = document.querySelectorAll(
      ".advantage-card, .vm-card, .gallery-item",
    );

    cards.forEach((card) => {
      card.style.transition = "all 0.3s ease";
    });
  };

  /* inisialisasi semua fungsi */
  const init = () => {
    initGallery();
    animateCounters();
    initHoverEffects();

    console.log("About page - Animations & interactions ready!");
  };

  /* jalankan saat ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
