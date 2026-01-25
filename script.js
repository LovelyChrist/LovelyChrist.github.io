/* =========================
   CONVEYOR BELT SLIDESHOW
========================= */

const wrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const totalSlides = slides.length;

// Move slides left
function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide
let slideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Arrow controls
function nextSlide() {
    clearInterval(slideInterval);
    showSlide(currentIndex + 1);
    slideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
}

function prevSlide() {
    clearInterval(slideInterval);
    showSlide(currentIndex - 1);
    slideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
}

/* =========================
   CART
========================= */

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart 🙏`);
}

/* =========================
   SEARCH
========================= */

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        products.forEach(product => {
            product.style.display = product.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";
        });
    });
}
