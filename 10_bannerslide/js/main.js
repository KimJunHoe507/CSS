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
});