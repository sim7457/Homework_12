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
        arrows: false,
    });

    $('.sub_slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.img_slide').slick({
        arrows: false,
        fade: true,
    });

    $('.notice-box i').on('click', function () {
        $('.notice-box').addClass('on')
    });

    $('.tab-list span').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.img_slide').slick('slickGoTo', idx);
    });

    $('.family-site button').on('click', function () {
        $('.family-site ul').toggleClass('on');
        $('.family-site button').toggleClass('on');
    })

});