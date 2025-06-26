$(function(){
    $('.slide').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        // fade효과
        fade: true,
        // 상하슬라이드
        // vertical: true
    });

    // 공지사항의 첫번째를 클릭하면 팝업창 열기
    $(".content .notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })
    
    // 닫기 버튼을 클리하면 팝업창 닫기
    $(".btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })
    // 버튼은 클릭하면 list박스를 보임/숨김
    $(".fm_btn").click(function(){
        $(".family ul").toggle();
    })
    // gnb에 마우스를 올리면 2단 전체메뉴 나옴
    $(".gnb").mouseenter(function(){
        $(".gnbbg,.depth2").show();
    })
    // gnb에 마우스가 벗어나면 2단 전체메뉴 숨김
    $(".gnb").mouseleave(function(){
        $(".gnbbg,.depth2").hide();
    })
})

