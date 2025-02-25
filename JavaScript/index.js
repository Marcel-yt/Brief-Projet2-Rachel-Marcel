const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
const totalSlides = 2; // 6 images, affichées par groupe de 3

next.addEventListener('click', () => {
    if (index < totalSlides) {
        index++;
        updateCarousel();
    }
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

//Testimonial

document.addEventListener("DOMContentLoaded", function () {
    const testimonialCarousel = document.getElementById("testimonialCarousel");
    const slides = testimonialCarousel.children;
    const testimonialPrev = document.getElementById("testimonialPrev");
    const testimonialNext = document.getElementById("testimonialNext");
    const dots = document.querySelectorAll(".testimonial-dot");

    let testimonialIndex = 0;
    const testimonialTotalSlides = slides.length;

    function updateCarousel() {
        testimonialCarousel.style.transform = `translateX(-${testimonialIndex * 100}%)`;
        
        // Mettre à jour les indicateurs
        dots.forEach((dot, i) => {
            if (i === testimonialIndex) {
                dot.classList.remove("bg-gray-300");
                dot.classList.add("bg-blue-500");
            } else {
                dot.classList.remove("bg-blue-500");
                dot.classList.add("bg-gray-300");
            }
        });
    }

    testimonialNext.addEventListener("click", () => {
        if (testimonialIndex < testimonialTotalSlides - 1) {
            testimonialIndex++;
        } else {
            testimonialIndex = 0;
        }
        updateCarousel();
    });

    testimonialPrev.addEventListener("click", () => {
        if (testimonialIndex > 0) {
            testimonialIndex--;
        } else {
            testimonialIndex = testimonialTotalSlides - 1;
        }
        updateCarousel();
    });

    updateCarousel(); // Initialiser les indicateurs
});