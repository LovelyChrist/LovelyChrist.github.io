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

    slides[currentSlide].classList.add("exit"); // slide out left

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.left = "100%"; // reset to right
    slides[currentSlide].offsetHeight; // force reflow
    slides[currentSlide].classList.add("active"); // slide in
}

setInterval(showSlides, 4000);


/* ================================
   PRODUCT PAGE NAVIGATION
================================ */

function goToProduct(name, price) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    window.location.href = "product.html";
}


/* ================================
   LOAD PRODUCT DETAIL PAGE
================================ */

if (document.getElementById("productName")) {
    document.getElementById("productName").innerText =
        localStorage.getItem("productName") || "Product";

    document.getElementById("productPrice").innerText =
        "$" + (localStorage.getItem("productPrice") || "0.00");
}


/* ================================
   CART SYSTEM
================================ */

function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: localStorage.getItem("productName"),
        price: localStorage.getItem("productPrice")
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🙏");
}


/* ================================
   DISPLAY CART
================================ */

if (document.getElementById("cartItems")) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            container.innerHTML += `
                <p>${item.name} — $${item.price}</p>
            `;
        });
    }
}


/* ================================
   CHECKOUT FLOW
================================ */

function completeOrder(e) {
    e.preventDefault();
    localStorage.removeItem("cart");
    alert("Order placed! Thank you 🙌");
    window.location.href = "index.html";
}


/* ================================
   SEARCH FILTER
================================ */

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();

        products.forEach(product => {
            const text = product.innerText.toLowerCase();
            product.style.display = text.includes(value) ? "block" : "none";
        });
    });
}
