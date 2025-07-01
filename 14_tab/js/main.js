$(function(){
    $(".menu li").click(function(){
        $(".menu li").removeClass("on")
        $(this).addClass("on");
        
        let num=$(this).index();

        $(".list").hide();
        $(".list").eq(num).show();
    })
})