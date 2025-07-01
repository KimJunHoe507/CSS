$(function(){
    // .tab li 클릭하면
    $(".tab li").click(function(){
        $(".tab li").removeClass("on");
        $(this).addClass("on");

        // 몇번째를 클릭했는지 알기
        let num=$(this).index();
        console.log(num);

        $(".product_wrap .product").hide();
        $(".product_wrap .product").eq(num).show();
    })


})