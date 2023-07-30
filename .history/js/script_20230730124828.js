//header
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 0) {
            $('header-nav').css('opacity', 1);
            $('header').css('backgrou')
        } else {
            $('header-nav').css('opacity', 0);
        }
    })
})
