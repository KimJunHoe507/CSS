$(function(){
    // slide
    $(document).ready(function(){
        $('.slide').slick({
            autoplay:true,
            arrows:false
        });
    });
    // 패밀리사이트 버튼on/off
    $(".family button").click(function(){
        $(".family ul").toggle();
    })
    
    // 2차메뉴 보임/숨김
    $(".gnb").mouseenter(function(){
        $(".gnbbg").show();
        $(".depth2").show();
    })
    $(".gnb").mouseleave(function(){
        $(".depth2").hide();
        $(".gnbbg").hide();
    })

    // popup 보임/숨김
    $(".notice ul li a").click(function(){
        $(".popup").show();
        $(".darkbg").show();
    })
    $(".popup_btn").click(function(){
        $(".popup").hide();
        $(".darkbg").hide();
    })
})