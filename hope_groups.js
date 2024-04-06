const images = document.querySelectorAll('.hope_groups_slider .hope_groups_slider_line img');
const sliderLine = document.querySelector('.hope_groups_slider .hope_groups_slider_line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.hope_groups_slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}












//$(document).ready(function () {
//    $('.hope_groups_slider').slick({
//        dots: true,
//        infinite: false,
//        speed: 300,
//        slidesToShow: 1,
//        adaptiveHeight: false,
//        slidesToScroll: 1,
//        arrows: false,
        
        // centerMode: true,
        // rows: 1,
        // slidesPerRow: 1,
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" class="slick-next">Next</button>'
//    });
//});