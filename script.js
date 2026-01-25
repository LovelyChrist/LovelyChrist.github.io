/* =========================
   SLIDESHOW (FIXED)
========================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval;

function showSlide(nextIndex) {
    slides.forEach(slide => {
        slide.classList.remove("active", "exit");
    });

    // current slide exits left
    slides[currentSlide].classList.add("exit");

    // calculate next slide
    currentSlide = (nextIndex + slides.length) % slides.length;

    // force start position offscreen right
    slides[currentSlide].style.left = "100%";
    slides[currentSlide].offsetHeight; // force reflow
    slides[currentSlide].classList.add("active");
}

function nextSlide() {
    resetInterval();
    showSlide(currentSlide + 1);
}

function prevSlide() {
    resetInterval();
    showSlide(currentSlide - 1);
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideshow();
}

// start slideshow on load
startSlideshow();

/* =========================
   CART SYSTEM
========================= */
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🙏");
}

const cartContainer = document.getElementById("cartItems");

if (cartContainer) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.length) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            cartContainer.innerHTML += `<p>${item.name} — $${item.price}</p>`;
        });
    }
}

function checkout() {
    window.location.href = "checkout.html";
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
