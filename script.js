function showMessage() {
    document.getElementById("message").innerText =
        "Hello! Your JavaScript is working 👍";
}

/* Slideshow Logic */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 3000);
