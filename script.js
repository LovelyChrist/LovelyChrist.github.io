/* =========================
   SLIDESHOW CONVEYOR BELT
========================= */

const wrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const totalSlides = slides.length;

// Show slide by shifting wrapper
function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);

// Arrows
function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

/* =========================
   CART
========================= */

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${name} to cart 🙏`);
}

/* =========================
   SEARCH
========================= */

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        products.forEach(p => {
            p.style.display = p.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";
        });
    });
}
