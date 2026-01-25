/* =========================
   SLIDESHOW (CONVEYOR BELT)
========================= */

const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const totalSlides = slides.length;

/* Move slideshow */
function updateSlidePosition() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Next slide */
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

/* Previous slide */
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

/* Auto-rotate */
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

const s
