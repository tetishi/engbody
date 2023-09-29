//header
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 250) {
            $('.counseling-btn-top').css('opacity', 1);
            $('.header').css('background-color', '#fff');
            $('.header').css('box-shadow', '0px 3px 6px 0px rgba(0, 0, 0, .5)');
        } else {
            $('.counseling-btn-top').css('opacity', 0);
            $('.header').css('background-color', 'transparent');
            $('.header').css('box-shadow', 'none');
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
    $('.worker-container').removeClass('show').eq(index).addClass('show');
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

//price scroll
$(".price-list").scroll(function() {
    if ($(this).scrollLeft() > 20) {
        $(".price-scroll").fadeOut();
    }
});

//page top botton
$(function() {
    var pagetop = $('.pagetop')

    pagetop.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

//fade up animation
function fadeAnime() {
    //ふわっ
    $('.js-fade-up-trigger').each(function() {
        //js-fade-up-triggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');//画面内に入ったらfadeUpというクラス名を追記
        }
    });
}

$(window).scroll(function)
