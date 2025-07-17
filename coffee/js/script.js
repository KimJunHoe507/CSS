$(function(){
    $('.popup__btn--close').click(function(){
        $('.popup').slideUp();
    })
})

$(function(){
    // 주메뉴에 마우스 올렸을 때
    $('.header__gnb li a').mouseenter(function(){
        $('header').stop().animate({'height':'370px'},500);
        $('.depth2').stop().fadeIn(300);
    })
    
    // 주메뉴에 마우스 벗어났을 때
    $('.header__gnb').mouseleave(function(){
        $('header').stop().animate({'height':'103px'},500);
        $('.depth2').stop().fadeOut(300);
    })
})

$(document).ready(function(){
    $('.main__slide').slick({
        autoplay: true,
        dots: true,
        arrow: true,
    });
});