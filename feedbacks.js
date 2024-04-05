const feedbackImages = document.querySelectorAll('.feedbacks_slider .feedbacks_slider_line img');
const feedbackSliderLine = document.querySelector('.feedbacks_slider .feedbacks_slider_line');
let feedbackCount = 0;
let feedbackWidth;

function initializeSlider() {
    console.log('resize');
    feedbackWidth = document.querySelector('.feedbacks_slider').offsetWidth;
    feedbackSliderLine.style.width = feedbackWidth * feedbackImages.length + 'px';
    feedbackImages.forEach(item => {
        item.style.width = feedbackWidth + 'px';
        item.style.height = 'auto';
    });
    rollFeedbackSlider();
}

initializeSlider();
window.addEventListener('resize', initializeSlider);

document.querySelector('.button-next').addEventListener('click', function () {
    feedbackCount++;
    if (feedbackCount >= feedbackImages.length) {
        feedbackCount = 0;
    }
    rollFeedbackSlider();
});

document.querySelector('.button-prev').addEventListener('click', function () {
    feedbackCount--;
    if (feedbackCount < 0) {
        feedbackCount = feedbackImages.length - 1;
    }
    rollFeedbackSlider();
});

function rollFeedbackSlider() {
    feedbackSliderLine.style.transform = 'translate(-' + feedbackCount * feedbackWidth + 'px)';
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








// $(document).ready(function(){
//     $('.feedbacks_corousel').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow:  1,
//         adaptiveHeight: true,
//         slidesToScroll: 1,
//         arrows: false,
//         prevArrow: '<button type="button" class="slick-prev">Previous</button>',
//         nextArrow: '<button type="button" class="slick-next">Next</button>'
//     });
// });
