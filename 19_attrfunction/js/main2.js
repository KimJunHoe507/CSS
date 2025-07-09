$(function(){
    $('.tit ul li').mouseenter(function(){
        let url = $(this).find('img').attr('src');
        $('.mainbox img').attr({'src':url});
    })
})