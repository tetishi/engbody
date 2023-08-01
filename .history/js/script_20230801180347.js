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
    $('.anime-extend').each(function() {
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('page-title-extend');
        } else {
            $(this).removeClass('page-title-extend');
        }
    });

    $('.pink-background').each(function() {
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('pink-background');
        } else {
            $(this).removeClass('pink-background');
        }
    });
}

$(window).on('load', function() {
    BgFadeAnime();
});


//トレーナー、スタッフ選択
$('.option').click(function() {
    var index = $('.option').index(this);
    $('.option').removeClass('option-active');
    $(this).addClass('option-active');
    $('.worker-list').removeClass('show').eq(index).addClass('show');
});

//swiper
const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

//プライススクロール
$(".price-list").scroll(function() {
    if ($(this).scrollLeft() > 20) {
        $(".price-scroll").fadeOut()
    }
})
