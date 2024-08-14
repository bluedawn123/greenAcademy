const triggerBtn = document.querySelector('.trigger-menu');
const body = document.body;
let lastScroll = 0;

/*triggerBtn 누르면
body에 menu-opend 클래스명이 없으면 추가, 있으면 제거 */

triggerBtn.addEventListener('click', () =>{
    body.classList.toggle('menu-opend')
})

/*스크롤 내린걸 알려면 마지막의 스크롤량을 알아야하고
지금의 스크롤량이랑 비교해야 한다. */
window.addEventListener("scroll", function(){
    let currentScroll = window.scrollY;

    /*스크롤 아래로 하면 body에 클래스명 scroll-up 제거, scroll-down 추가
    위로하면, body에 scroll-down 제거 scroll-up 추가
    */
    if(currentScroll > lastScroll){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }else if(currentScroll < lastScroll){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll;
  })