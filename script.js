/* =========================
   SLIDESHOW (WORKING)
========================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "exit");
        slide.style.left = "100%";

        if (i === index) {
            slide.classList.add("active");
            slide.style.left = "0";
        }
    });
}

function nextSlide() {
    slides[currentSlide].classList.add("exit");
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    slides[currentSlide].classList.add("exit");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// auto-rotate
setInterval(nextSlide, 5000);

/* =========================
   CART
========================= */

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🙏");
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
