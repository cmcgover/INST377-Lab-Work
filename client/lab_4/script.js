let slidePosition = 0;
const slides = document.querySelectorAll('carousel-item');
const totalSlides = slides.length;


document.
    querySelector('carousel-button--next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });
document.
    querySelector('carousel-button--prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    });

function updateSlidePostion() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item--visible');
        slide.classList.add('carousel-item--hidden');
    }

    slides[slidePosition].classList.add('carousel-item--visible');
}
