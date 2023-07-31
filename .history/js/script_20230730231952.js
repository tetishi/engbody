//header
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            $('.counseling-btn-top').css('opacity', 1);
            $('.header').css('background-color', '#fff');
        } else {
            $('.counseling-btn-top').css('opacity', 0);
            $('.header').css('background-color', 'transparent');
        }
    })
})

//背景色が伸びて出現
function BgFadeAnime() {
    $('.page-title').each(function() {
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight) {
            $(this).addClass('page-title-extend');
        } else {
            $(this).removeClass('page-title-extend');
        }
    });

    $('.white-background')
}
