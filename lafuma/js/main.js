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
