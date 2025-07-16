$(function () {
    $(".header__gnb>li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".header__gnb>li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
    });

    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoplay: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});

// content 이미지 바꾸기
$(function(){
    $('.main__content--list li').mouseenter(function(){
        // attr : 속성 가져오기
        let num = $(this).find('img').attr('src');
        // replace : 교체/치환
        let num2 = num.replace('_ot','_ov');
        $(this).find('img').attr('src',num2);
    })

    $('.main__content--list li').mouseleave(function(){
        let num = $(this).find('img').attr('src');
        let num2 = num.replace('_ov','_ot');
        $(this).find('img').attr('src',num2);
    })
})

// family site list
$(function(){
    $('.footer__btn--familysite').click(function(){
        $('.footer__btn--list').stop().slideToggle();
        $(this).toggleClass('on');
    })
})

// 창의 크기 조절하는 이벤트 발생시
// 슬라이드 안에 pc버전 이미지 mobile로 교체
// 창의 크기 조절하는 이벤트
function widthRes(){
    // 윈도우 width
    let width = $(window).width();

    // 이미지 src
    let mImgSorce = [
        './images/m_catalogue.jpg',
        './images/m_video.jpg',
        './images/m_product.jpg',
        './images/m_athletic.jpg',
        './images/m_camping.jpg'
    ];
    let imgSorce = [
        './images/cata_ot.jpg',
        './images/video_ot.jpg',
        './images/product_ot.jpg',
        './images/athletic_ot.jpg',
        './images/camping_ot.jpg'
    ]

    // 짤막 상식
    // 크롬 개발자모드로 웹 창 사이즈 조절하면 가로길이가 나오는데
    // 크롬 웹 오른쪽에 스크롤바까지 합친 값이다(15px)
    if(width <= 767){
        // 모바일
        // 슬라이드
        $('.swiper-slide').eq(0).find('img').attr('src','./images/m_visual_a.jpg');
        $('.swiper-slide').eq(1).find('img').attr('src','./images/m_visual_b.jpg');

        // content
        $('.main__content--list li').each(function(index){
            $(this).find('img').attr('src',mImgSorce[index]);
        })

        // footer__menu
        $('.footer__menu li').eq(2).children().html('go to facebook');
        $('.footer__menu li').eq(3).children().html('go to blog');
    }else{
        // pc
        // 슬라이드
        $('.swiper-slide').eq(0).find('img').attr('src','./images/visual_a.jpg');
        $('.swiper-slide').eq(1).find('img').attr('src','./images/visual_b.jpg');

        // content
        $('.main__content--list li').each(function(index){
            $(this).find('img').attr('src',imgSorce[index]);
        })
        
        // footer__menu
        $('.footer__menu li').eq(2).children().html('facebook');
        $('.footer__menu li').eq(3).children().html('blog');
    }
}

// 웹 킬때 실행
$(function(){
    widthRes();
})

// 윈도우 사이즈 바꾸면 실행
$(window).resize(function(){
    widthRes();
})


$(function(){
    $('.header__icon--m_btn').click(function(){
        $('.m__cover').fadeIn();
        $('.m__menu--wrap').addClass('.on');
        $('body,html').css({'overflow':'hidden'});
    });

    $('.m__cover').click(function(){
        $('.m__cover').fadeOut();
        $('.m__menu--wrap').removeClass('.on');
        $('body,html').css({'overflow':'auto'});
    })
})

$('.depth2').hide();

$(function(){
    $('m__menu--gnb>li>a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
    })
})