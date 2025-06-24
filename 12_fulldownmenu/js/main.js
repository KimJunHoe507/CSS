$(function(){
    // 마우스를 header에 hover하면  header 높이를 400px로 늘리기
    $("header").mouseenter(function(){
        $("header").stop().animate({'height':"400px"})

})
    
    
    
    
    // 마우스를 header에 영역에서 벗어나면 높이를 80px로 돌아오기
    $("header").mouseleave(function(){
        $("header").stop().animate({'height':80})

    });
    
    
    
});