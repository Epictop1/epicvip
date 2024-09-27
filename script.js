$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var headerHeight = $('.header-wrapper').height();
    var cardTop = $('.card').offset().top;

    if (scrollTop + headerHeight > cardTop) {
        $('.card').css('opacity', 0);
    } else {
        $('.card').css('opacity', 1);
    }
});