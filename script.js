/* ================================
   SLIDESHOW: LEFT → RIGHT ANIMATION
================================ */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlides() {
    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.classList.remove("exit");
    });

    slides[currentSlide].classList.add("exit");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.left = "100%";
    slides[currentSlide].offsetHeight; // force reflow
    slides[currentSlide].classList.add("active");
}

setInterval(showSlides, 4500);

/* ================================
   SEARCH FILTER (READY)
================================ */

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        products.forEach(product => {
            product.style.display =
                product.innerText.toLowerCase().includes(value)
                    ? "block"
                    : "none";
        });
    });
}
