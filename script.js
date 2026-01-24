/* SLIDESHOW: LEFT → RIGHT ANIMATION */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("exit"));

    slides[currentSlide].classList.add("exit"); // slide out left

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.left = "100%"; // reset to right
    slides[currentSlide].offsetHeight; // force reflow
    slides[currentSlide].classList.add("active"); // slide in
}

setInterval(showSlides, 3000);

/* PRODUCT PAGE NAVIGATION */
function goToProduct(name, price) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    window.location.href = "product.html";
}

/* LOAD PRODUCT DETAIL */
if (document.getElementById("productName")) {
    document.getElementById("productName").innerText = localStorage.getItem("productName");
    document.getElementById("productPrice").innerText = localStorage.getItem("productPrice");
}

/* CART SYSTEM */
function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        name: localStorage.getItem("productName"),
        price: localStorage.getItem("productPrice")
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

/* DISPLAY CART */
if (document.getElementById("cartItems")) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");

    cart.forEach(item => {
        container.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });
}

/* CHECKOUT */
function completeOrder(e) {
    e.preventDefault();
    localStorage.removeItem("cart");
    alert("Order placed! Thank you 🙏");
    window.location.href = "index.html";
}

/* SEARCH FILTER */
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
