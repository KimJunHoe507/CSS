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

    // // work에 coding / design toggleSwiching
    // $('.work__btn--list .coding').click(function(e){
    //     e.preventDefault();
    //     $('.work__btn--list li').removeClass('action');
    //     $(this).addClass('action');
    //     $('.work__list--d').hide();
    //     $('.work__list').show();
    // })
    // $('.work__btn--list .design').click(function(e){
    //     e.preventDefault();
    //     $('.work__btn--list li').removeClass('action');
    //     $(this).addClass('action');
    //     $('.work__list').hide();
    //     $('.work__list--d').show();
    // })




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
            start: '0% 40%',
            end: '5% 45%',
            // markers: true
        }
    })
    .fromTo('.about__info',{transform:"translateX(-200%)"},{transform:"translateX(0)",ease:"easeInOut" , duration:3},0)
    .fromTo('.skill',{transform:"translateX(200%)"},{transform:"translateX(0)",ease:"easeInOut" , duration:3},0)
    
    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: "#about",
            start: '10% 40%',
            end: '15% 45%',
            // markers: true
        }
    })
    .from('.skill li span', {width: "50px"},1)

    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: "#works",
            start: '0 40%',
            end: '5% 45%',
            // markers: true
        }
    })
    .from('li:nth-child(1) a .card',{y:"100px", duration: 3},0)

    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: "#works",
            start: '25% 40%',
            end: '30% 45%',
            // markers: true
        }
    })
    .from('li:nth-child(2) a .card',{y:"100px", duration: 3},0)
    
    gsap.timeline({
        scrollTrigger: {
            scrub: 3,
            trigger: "#works",
            start: '50% 40%',
            end: '55% 45%',
            // markers: true
        }
    })
    .from('li:nth-child(3) a .card',{y:"100px", duration: 3},0)
})

$(function(){

    gsap.registerPlugin(ScrollTrigger);

    const $text = $('.text');
    const letters = $text.text().split('');

    $text.html('');

    $.each(letters, function(i,text){
        $text.append(`<span class="typing">${text}</span>`);
    });

    gsap.set('.typing',{opacity: 0, y: 20});

    const ct = gsap.timeline({
        scrollTrigger: {
            trigger: ".text",
            start: "top 80%",
            toggleActions: 'play none none none',
            // markers: true,
        }
    })

    ct.to('.typing',{
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power2.out',
        duration: 0.4
    },0.5)
})

