$(function(){
    $('.box>ul>li>a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
        
    })
})