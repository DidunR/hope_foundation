const feedbackImages = document.querySelectorAll('.feedbacks_slider .feedbacks_slider_line img');
const feedbackSliderLine = document.querySelector('.feedbacks_slider .feedbacks_slider_line');
const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');

let feedbackCount = 0;
let feedbackWidth;

function initializeSlider() {
    feedbackWidth = document.querySelector('.feedbacks_slider').offsetWidth;
    feedbackSliderLine.style.width = feedbackWidth * feedbackImages.length + 'px';
    feedbackImages.forEach(item => {
        item.style.width = feedbackWidth + 'px';
        item.style.height = '50px'; // Set height to 7px
    });
    rollFeedbackSlider();
}

initializeSlider();
window.addEventListener('resize', initializeSlider);

buttonNext.addEventListener('click', function () {
    feedbackCount++;
    if (feedbackCount >= feedbackImages.length) {
        feedbackCount = 0;
    }
    rollFeedbackSlider();
});

buttonPrev.addEventListener('click', function () {
    feedbackCount--;
    if (feedbackCount < 0) {
        feedbackCount = feedbackImages.length - 1;
    }
    rollFeedbackSlider();
});

function rollFeedbackSlider() {
    feedbackSliderLine.style.transform = 'translate(-' + feedbackCount * feedbackWidth + 'px)';
}
