// 스크롤타이거를 gsap과 연동(등록)
gsap.registerPlugin(ScrollTrigger);

$(function(){
    // 애니메이션할 요소를 선택
    // scrollbar의 위치와 요소의 위치를 정해줌
    gsap.timeline({
        // 스크롤바의 따른 애니메이션 설정
        scrollTrigger:{
            // 애니메이션 요소 선택
            trigger: '#section2 ul',
            // 애니메이션 시작 부분(요소 위치, 브라우저 위치)
            start: '20% 80%',
            // 애니메이션의 끝부분
            end: '100% 100%',
            // 애니메이션을 부드럽게 처리
            scrub: 3,
            // 마커 표시
            // markers: true,
        },
    })
    .to('#section2 ul li:nth-child(1)',{ y: -300, duration: 1, ease: 'ease-in-out' }, 0.5)
    .to('#section2 ul li:nth-child(2)',{ y: -300, duration: 1, ease: 'ease-in-out' }, 0.7)
    .to('#section2 ul li:nth-child(3)',{ y: -300, duration: 1, ease: 'ease-in-out' }, 0.9)
    .to('#section2 ul li:nth-child(4)',{ y: -300, duration: 1, ease: 'ease-in-out' }, 1)

    // 애니메이션 설정
    gsap.timeline({
        scrollTrigger:{
            trigger: "#section4",
            scrub: 3,
            start: "10% 20%",
            end: "50% 50%",
            // markers: true,
        }
    })
    // .fromTo("선택자",{어디서},{어디까지},지연시간)
    .fromTo("#section4 ul li:nth-child(1)",{y:600},{y:0},1)
    .fromTo("#section4 ul li:nth-child(2)",{y:600},{y:0},1.5)
    .fromTo("#section4 ul li:nth-child(3)",{y:600},{y:0},2)
    .fromTo("#section4 ul li:nth-child(4)",{y:600},{y:0},2.5)
    .fromTo("#section4 ul li:nth-child(5)",{y:600},{y:0},3)
    .fromTo("#section4 ul li:nth-child(6)",{y:600},{y:0},3.5)
    .fromTo("#section4 ul li:nth-child(7)",{y:600},{y:0},4)


    gsap.timeline({
        scrollTrigger: {
            trigger: "#section3",
            scrub: 3,
            start: "20% 30%",
            end: "50% 50%",
            markers: true
        }
    })
    .fromTo("#section3 h2",{x:-1000},{x:0},1)
    .fromTo("#section3 h2 span",{x:500},{x:0},1)
})