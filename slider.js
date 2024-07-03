let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrossel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.opacity = i === currentIndex ? '1' : '0';
    });

    const offset = -currentIndex * 100;
    document.querySelector('.carrossel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);