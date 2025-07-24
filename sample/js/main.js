let preNum = 0;

$(function(){

    // 메뉴바 클릭하면 gnb 나타남
    $('.header__btn--menu').click(function(){
        $(this).find('span').toggleClass('on');
        $(this).parent().find('.header__gnb').toggleClass('show');
    })

    // 스크롤바 이벤트 위치에 따라 header를 숨김/보임

    document.addEventListener('scroll',function(){
        let nowNum = $(window).scrollTop();

        if(nowNum > preNum){
            $('header').addClass('move');
        }else{
            $('header').removeClass('move');
        }
        
        preNum = nowNum;
    })


})

$(function(){
    // gsap 플러그인
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: "#intro",
            start: '40% 30%',
            end: '40% 30%',
            // markers: true
        }
    })
    .to('#intro',{backgroundColor:"#000", color: "#fff", ease:"none", duration: 3},0)

    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: "#about",
            start: '5% 40%',
            end: '30% 30%',
            markers: true
        }
    })
    .from('.skill li span', {width: "50px"},0)
})

