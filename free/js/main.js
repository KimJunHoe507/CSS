let header = document.querySelector('header');
let btn = document.querySelector('.header__m-btn');

btn.addEventListener('click', () => {
    // btn을 클릭하면 header에 on클래스 붙거나 사라짐
    header.classList.toggle('on');
})