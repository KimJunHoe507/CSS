$(function(){
    $('.list').slick({
    // 자동 실행
    autoplay:true,

    // 한 화면에 보일 개수
    slidesToShow:2,

    // 한번에 2개씩 스크롤
    slidesToScroll:1,

    // 좌우 버튼 숨기기
    arrows:false,
    
    // 페이지버튼 보이게
    dots:true,
    });

    // $(".btn_pause").click(function(){
    //     $(this).toggleClass("on");
    // })

    // addClass : class를 자동으로 추가
    // removeClass : class를 자동으로 제거
    // switch 기법
    let sw=true;
    $(".btn_pause").click(function(){
        if(sw==true){
            $(this).addClass("on");
            // 슬라이드 일시정지
            $(".list").slick("slickPause");
            sw=false;
        }else{
            $(this).removeClass("on");
            // 슬라이드 재생
            $(".list").slick("slickPlay");
            sw=true;
        }
    })
});