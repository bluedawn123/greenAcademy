let header = document.querySelector('header');
let slidewrapper = document.querySelector('.slidewrapper');
let slidecontainer = slidewrapper.querySelector('.slidecontainer');
let slides = slidecontainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = slidewrapper.querySelector('.prev');
let nextBtn = slidewrapper.querySelector('.next');

//슬라이드
/*
슬라이드 배치
  slidewrapper의 너비를 파악하고 슬라이드 개수 곱, 그 수치를 slidecontainer의 너비로 지정
*/
function slidelayout(){
  slidecontainer.style.width = slidewrapper.offsetWidth * slideCount+'px';
}
slidelayout();

//슬라이드 이동 함수
function goToSlide(num){
  slidecontainer.style.left = `${-num * 100}%`;
  currentIdx = num;

}
//goToSlide(1);
nextBtn.addEventListener('click',()=>{
  if(currentIdx === slideCount-1){    
    goToSlide(0);
  }else{
    goToSlide(currentIdx + 1);
  }
});
prevBtn.addEventListener('click',()=>{
  if(currentIdx === 0){    
    goToSlide(slideCount-1);
  }else{
    goToSlide(currentIdx - 1);
  }
});

window.addEventListener('resize',()=>{
  slidelayout();
});

window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('sticky');
  }else{
    header.classList.remove('sticky');
  }
});