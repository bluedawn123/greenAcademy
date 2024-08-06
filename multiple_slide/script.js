const slideWrapper = document.querySelector('.slide_wrapper');
const slideContainer = slideWrapper.querySelector('.slides');
const slides = slideContainer.querySelectorAll('li');
const slideCount = slides.length;
let currentIdx = 0;
const slideWidth = 200;
const slideGap = 30;
const maxSlides = 3;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');

//슬라이드 전체 너비 반영
/* (200x5)+(30x4) */
slideContainer.style.width = (slideWidth*slideCount)+(slideGap*(slideCount-1))+'px';

//이동함수
/*
moveSlide함수는 숫자가 들어오면 슬라이드 이동
num = 1  slideContainer -230, num = 2  slideContainer -460
*/
function moveSlide(num){
  if(num > slideCount - maxSlides){
    num = 0; 
  } 
  if(num < 0){
    num = slideCount - maxSlides;
  }
  slideContainer.style.left = `${-num*(slideWidth+slideGap)}px`;
  currentIdx = num;
}

// 이전, 다음 버튼으로 이동하기
nextBtn.addEventListener('click',()=>{  
    moveSlide(currentIdx + 1); 
});
prevBtn.addEventListener('click',()=>{ 
    moveSlide(currentIdx - 1); 
});

// 질문???????????????????????
window.addEventListener('keydown',(e)=>{
  console.log(e.key);
  if(e.key === 'ArrowLeft'){
      moveSlide(currentIdx - 1);    
  }
  if(e.key === 'ArrowRight'){
      moveSlide(currentIdx + 1);    
  }
})
