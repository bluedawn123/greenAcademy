const slideWrapper = document.querySelector('.slide_wrapper');
const slideContainer = slideWrapper.querySelector('.slides');
const slides = slideContainer.querySelectorAll('li');
const slideCount = slides.length;
let currentIdx = 0;
const slideWidth = 400;
const slideGap = 30;
const maxSlides = 3;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');

//복사본 생성
let slidesHTML = slideContainer.innerHTML;
let clonedSlidesHTML = slidesHTML.replace(/<li>/g,'<li class="clone">');
slideContainer.innerHTML = clonedSlidesHTML + slideContainer.innerHTML;
slideContainer.innerHTML += clonedSlidesHTML;

const allSlideCount = slideContainer.querySelectorAll('li').length;

//슬라이드 전체 너비 반영
/* (200x5)+(30x4) */
slideContainer.style.width = (slideWidth*allSlideCount)+(slideGap*(allSlideCount-1))+'px';

//슬라이드의 너비만큼 중앙으로 위치이동. (안하면 복사본의 첫페이지만 보기때문)
let moveAmount = slideWidth*slideCount+slideGap*slideCount;
slideContainer.style.transform = `translateX(-${moveAmount}px)`;


//이동함수
/*
moveSlide함수는 숫자가 들어오면 슬라이드 이동
num = 1  slideContainer -230, num = 2  slideContainer -460
*/
function moveSlide(num){
  /*
  ci 7번이 복사본 마지막 -> ci 2  -460px
  ci -5 복사본 처음 -> ci 0   0px

  복사본의 마지막,처음이면 원본으로 돌려놔야한다.
  여기선, currentIdx가 7, -5가 마지막, 처음이다. 
*/
  slideContainer.style.left = `${-num*(slideWidth+slideGap)}px`;
  currentIdx = num;

  if(currentIdx === slideCount*2-maxSlides){
    setTimeout(()=>{
      slideContainer.classList.remove('animated');  //눈속임
      slideContainer.style.left = `-${(num-slideCount)*(slideWidth+slideGap)}px`;
      currentIdx = num-slideCount;
    }, 500);

    //다시 animated 붙혀주기
    setTimeout( () => {
      slideContainer.classList.add('animated');
    }, 600)
  }
  console.log(currentIdx);


if(currentIdx === -slideCount){
  setTimeout(()=>{
    slideContainer.classList.remove('animated');  //눈속임
    slideContainer.style.left = '0px';
    currentIdx = 0;
  }, 500);

  //다시 animated 붙혀주기
  setTimeout( () => {
    slideContainer.classList.add('animated');
  }, 600)
}
}


/*어떤것이 들어오던간데 slideTrigger을 false로 바꿔놔서, 해당 시간이 지나기 전에 실행을 되지 않게 한다. */
function debounce(callback, time){
  let slideTrigger = true;
  return ()=>{
    if(slideTrigger){
      callback();
      slideTrigger = false;
      setTimeout( () => {
        slideTrigger = true;
      }, time)
    }
  }
}


// 이전, 다음 버튼으로 이동하기
nextBtn.addEventListener('click', debounce( ()=>{  
  moveSlide(currentIdx + 1); 
}, 500) );

prevBtn.addEventListener('click', debounce( ()=>{ 
  moveSlide(currentIdx - 1); 
}, 500) );


