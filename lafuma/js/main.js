$(function () {
    $(".header__gnb>li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".header__gnb>li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
    });

    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});

$(function(){
    $('.main__content--list li').mouseenter(function(){
        // attr : 속성 가져오기
        let num = $(this).find('img').attr('src');
        // replace : 교체/치환
        let num2 = num.replace('_ot','_ov');
        $(this).find('img').attr('src',num2);
    })

    $('.main__content--list li').mouseleave(function(){
        let num = $(this).find('img').attr('src');
        let num2 = num.replace('_ov','_ot');
        $(this).find('img').attr('src',num2);
    })
})

$(function(){
    $('.footer__btn--familysite').click(function(){
        $('.footer__btn--list').stop().slideToggle();
        $(this).toggleClass('on');
    })
})