let index = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    showSlide();
}

/* auto conveyor */
setInterval(nextSlide, 5000);
