$(function () {
    $('.notice_slick').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });

    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });





    $('.notice-box i').on('click', function () {
        $('.notice-box').addClass('on')
    });


});