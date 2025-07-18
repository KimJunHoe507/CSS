$(function () {
    $(".m_gnb>ul>li>a").click(function () {
        $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
        $(this).parent().siblings().find("a.on").removeClass("on");
        $(this).toggleClass("on");
    });

    $(".all_menu").click(function () {
        $(".cover").fadeIn();
        $(".m_side_wrap").animate({ left: 0 }, 300);
    });

    $(".m_close").click(function () {
        $(".m_side_wrap").animate({ left: "-100%" }, 300);
        $(".cover").fadeOut();
    });

    $(".tab_nav ul li").click(function () {
        $(".tab_nav ul li").removeClass("on");
        $(this).addClass("on");
    });
})