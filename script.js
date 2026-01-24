/* PRODUCT PAGE NAVIGATION */
function goToProduct(name, price) {
    localStorage.setItem("productName", name);
    localStorage.setItem("productPrice", price);
    window.location.href = "product.html";
}

/* LOAD PRODUCT */
if (document.getElementById("productName")) {
    document.getElementById("productName").innerText =
        localStorage.getItem("productName");

    document.getElementById("productPrice").innerText =
        localStorage.getItem("productPrice");
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
