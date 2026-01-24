/* =========================
   SLIDESHOW
========================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function rotateSlides() {
    if (!slides.length) return;

    slides.forEach(s => {
        s.classList.remove("active");
        s.classList.remove("exit");
    });

    slides[currentSlide].classList.add("exit");
    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.left = "100%";
    slides[currentSlide].offsetHeight;
    slides[currentSlide].classList.add("active");
}

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
    localStorage.removeItem("cart");
    alert("Order placed. God bless 🙌");
    window.location.href = "index.html";
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
