/* SLIDESHOW LOGIC (LEFT → RIGHT MOTION) */
const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide() {
    slides[current].classList.add("exit");
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.remove("exit");
    slides[current].style.left = "100%";
    slides[current].offsetHeight; // force reflow
    slides[current].classList.add("active");
}

setInterval(changeSlide, 3000);

/* SEARCH FILTER */
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        product.style.display = name.includes(value) ? "block" : "none";
    });
});
