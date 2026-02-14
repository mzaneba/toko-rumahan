(function () {
  "use strict";

  /* filter kategori produk */
  const filterProducts = () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const productItems = document.querySelectorAll(".product-item");
    const noResults = document.getElementById("noResults");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        filterBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        const category = this.getAttribute("data-category");
        let visibleCount = 0;
        productItems.forEach((item) => {
          if (
            category === "all" ||
            item.getAttribute("data-category") === category
          ) {
            item.classList.remove("hide");
            visibleCount++;
          } else {
            item.classList.add("hide");
          }
        });
        if (visibleCount === 0) {
          noResults.style.display = "block";
        } else {
          noResults.style.display = "none";
        }
      });
    });
  };

  /* pencarian produk */
  const searchProducts = () => {
    const searchInput = document.getElementById("searchInput");
    const productItems = document.querySelectorAll(".product-item");
    const noResults = document.getElementById("noResults");

    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      let visibleCount = 0;
      productItems.forEach((item) => {
        const productName = item
          .querySelector(".product-name")
          .textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
          item.classList.remove("hide");
          visibleCount++;
        } else {
          item.classList.add("hide");
        }
      });
      if (visibleCount === 0 && searchTerm !== "") {
        noResults.style.display = "block";
      } else {
        noResults.style.display = "none";
      }
      if (searchTerm !== "") {
        const filterBtns = document.querySelectorAll(".filter-btn");
        filterBtns.forEach((btn) => btn.classList.remove("active"));
      }
    });
  };

  /* inisialisasi */
  const init = () => {
    filterProducts();
    searchProducts();

    console.log("Products page - Filter & Search ready!");
  };

  /* jalankan saat ready */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
