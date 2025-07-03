$(function(){
    // 부드럽게 사라짐
    $('#btn2').click(function(){
        $('#li1').fadeOut();
    })

    // 부드럽게 보임
    $('#btn1').click(function(){
        $('#li1').fadeIn();
    })

    // 부드럽게 사라짐, 부드럽게 보임
    $('#btn3').click(function(){
        $('#li2').fadeToggle();
    })

    // slideUp버튼을 누르면 높이를 200->0
    $('#btn4').click(function(){
        $('#li3').slideUp();
    })
    
    // slideUp버튼을 누르면 높이를 0->200
    $('#btn5').click(function(){
        $('#li3').slideDown();
    })

    $('#btn6').click(function(){
        $('#li4').slideToggle();
    })
})