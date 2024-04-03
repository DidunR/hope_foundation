$(document).ready(function(){
    $('.hope_groups_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow:  1,
        adaptiveHeight: true,
        slidesToScroll: 1, // Додай цей параметр
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});
