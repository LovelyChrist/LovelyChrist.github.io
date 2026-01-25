document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;
    let interval;

    function setPositions() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active", "exit");
            slide.style.left = "100%";

            if (index === currentSlide) {
                slide.classList.add("active");
                slide.style.left = "0";
            }
        });
    }

    function showNext() {
        slides[currentSlide].classList.add("exit");
        currentSlide = (currentSlide + 1) % slides.length;
        setPositions();
    }

    function showPrev() {
        slides[currentSlide].classList.add("exit");
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        setPositions();
    }

    function startAuto() {
        interval = setInterval(showNext, 5000);
    }

    function resetAuto() {
        clearInterval(interval);
        startAuto();
    }

    // BUTTON EVENTS (THIS WAS MISSING BEFORE)
    nextBtn.addEventListener("click", () => {
        showNext();
        resetAuto();
    });

    prevBtn.addEventListener("click", () => {
        showPrev();
        resetAuto();
    });

    // INIT
    setPositions();
    startAuto();
});
