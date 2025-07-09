$(function(){
    // 속성값 가져올 때
    // 1. attr() -> $('선택자').attr('속성명')
    // 속성값 변경할 때
    // 1. attr() -> $('선택자').attr('속성명','바꿀 값')
    // find() -> 특정 요소를 기본으로 하위 요소를 선택할 때 사용
    // $('선택자').find('선택자')
    $(".box ul li").mouseenter(function(){
        // let num = $(this).index();

        let url = $(this).find('img').attr('src');
        // console.log(url);
        $('.mainbox img').attr({'src':url});
    })

})