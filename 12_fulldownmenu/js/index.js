$(function(){
    $(".gnb").mouseenter(function(){
        $("#header_wrap").stop().animate({"height":380},300);
        // 2단메뉴 보이게
        $(".depth2").show();
        $("#header_wrap").css({"border-bottom":"1px solid #c4c4c4"});
    })

    // 전체 박스를 마우스에서 벗어나면 높이를 110px로 변경
    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height":110},300);
        // 2단메뉴 숨김
        $(".depth2").hide();
        $("#header_wrap").css({"border-bottom":"none"});
    })

})