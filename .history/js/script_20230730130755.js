//header
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            $('.counseling-btn-top').css({
                opacity 1
            });
            $('.header').css('background-color', '#fff');
        } else {
            $('.counseling-btn-top').css('opacity', 0);
            $('.header').css('background-color', 'transparent');
        }
    })
})
