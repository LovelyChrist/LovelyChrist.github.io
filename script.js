/* =========================
   SLIDESHOW
========================= */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function rotateSlides() {
    if (slides.length === 0) return;

    // remove all classes
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.classList.remove("exit");
    });

    // current slide exits left
    slides[currentSlide].classList.add("exit");

    // next slide index
    currentSlide = (currentSlide + 1) % slides.length;

    // next slide enters from right
    slides[currentSlide].style.left = "100%";
    slides[currentSlide].offsetHeight; // force reflow
    slides[currentSlide].classList.add("active");
}

// start slideshow
setInterval(rotateSlides, 5000);

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
    window.location.href = 'checkout.html';
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
            p.style.display =
                p.innerText.toLowerCase().includes(value)
                    ? "block"
                    : "none";
        });
    });
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Rotate slides automatically
function rotateSlides() {
    showSlide(currentSlide + 1);
}

let slideInterval = setInterval(rotateSlides, 5000);

// Show slide by index
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.classList.remove("exit");
    });

    // current exits left
    slides[currentSlide].classList.add("exit");

    // calculate next slide index
    currentSlide = (index + slides.length) % slides.length;

    // next slide enters from right
    slides[currentSlide].style.left = "100%";
    slides[currentSlide].offsetHeight; // force reflow
    slides[currentSlide].classList.add("active");
}

// Arrow controls
function nextSlide() {
    clearInterval(slideInterval); // reset interval
    showSlide(currentSlide + 1);
    slideInterval = setInterval(rotateSlides, 5000);
}

function prevSlide() {
    clearInterval(slideInterval); // reset interval
    showSlide(currentSlide - 1);
    slideInterval = setInterval(rotateSlides, 5000);
}
