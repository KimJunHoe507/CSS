$(function(){
    $(".menu li").click(function(){
        $(".menu li").removeClass("on")
        $(this).addClass("on");
    })
})