$(function () {
  $(".a_slide").slick({
    // 자동실행
    autoplay: true,
    // 한번에 보여줄 개수
    slidesToShow: 1,
    // 좌우 버튼 숨기기
    arrows: false,
  });
  $(".b_slide").slick({
    // 자동실행
    autoplay: true,
    // 한번에 보여줄 개수
    slidesToShow: 2,
    // 좌우 버튼 숨기기
    arrows: false,

    dots: true,
  });

  $('.popup .close lable, #today_close').click(() => {
    // setCookie함수 호출
    if($('#today_close').is(':checked')){
        // 쿠키 정보 생성
        setCookie('subway','today',1);
        // 팝업창 숨김
        $('.popup').hide();
    }else{
        $('.popup').hide();
    }
    });

    $('.popup .close form .txt_btn').click(() => {
        $('.popup').hide();
    });

    if(GetCookie('subway') == 'today'){
        $('.popup').hide();
    }else{
        $('popup').show();
    }

  // 팝업창
  // GetCookie
    function GetCookie(name) {
    var value = null,
        search = name + "=";
    if (document.cookie.length > 0) {
        var offset = document.cookie.indexOf(search);
        if (offset != -1) {
        offset += search.length;
        var end = document.cookie.indexOf(";", offset);
        if (end == -1) end = document.cookie.length;
        value = unescape(document.cookie.substring(offset, end));
        }
    }
    return value;
    }
  // SetCookie
    function setCookie(name, value, expiredays) {
    var days = 10;
    if (days) {
        var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    }
});
