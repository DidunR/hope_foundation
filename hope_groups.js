const images = document.querySelectorAll('.hope_groups_slider .hope_groups_slider_line img');
const sliderLine = document.querySelector('.hope_groups_slider .hope_groups_slider_line');
let count = 0;
let width;

function init() {
    // Перевіряємо розмір екрану
    if (window.matchMedia("(max-width: 780px)").matches) {
        width = document.querySelector('.hope_groups_slider').offsetWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    }
}

init();
window.addEventListener('resize', function() {
    // Перевіряємо розмір екрану при ресайзі
    if (window.matchMedia("(min-width: 780px)").matches) {
        // Вимкнути функціонал JavaScript, якщо розмір екрану 780px або більше
        window.removeEventListener('resize', init);
        document.querySelector('.slider-next').removeEventListener('click', handleNext);
        document.querySelector('.slider-prev').removeEventListener('click', handlePrev);
    } else {
        // Включити функціонал, якщо розмір екрану менше 780px
        window.addEventListener('resize', init);
        document.querySelector('.slider-next').addEventListener('click', handleNext);
        document.querySelector('.slider-prev').addEventListener('click', handlePrev);
    }
});

function handleNext() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

function handlePrev() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}