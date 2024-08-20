const p_slideWrapper = document.querySelector('.p_slide_wrapper');
const p_slideContainer = p_slideWrapper.querySelector('.p_slides');
const p_slides = p_slideContainer.querySelectorAll('li');
const p_slideCount = p_slides.length;
let p_currentIdx = 0;
const p_slideWidth = 400;
const p_slideGap = 30;
const p_maxSlides = 3;
const p_prevBtn = p_slideWrapper.querySelector('.p_prev');
const p_nextBtn = p_slideWrapper.querySelector('.p_next');

//복사본 생성
let p_slidesHTML = p_slideContainer.innerHTML;
let p_clonedSlidesHTML = p_slidesHTML.replace(/<li>/g,'<li class="clone">');
p_slideContainer.innerHTML = p_clonedSlidesHTML + p_slideContainer.innerHTML;
p_slideContainer.innerHTML += p_clonedSlidesHTML;

const p_allSlideCount = p_slideContainer.querySelectorAll('li').length;

//슬라이드 전체 너비 반영
/* (200x5)+(30x4) */
p_slideContainer.style.width = (p_slideWidth*p_allSlideCount)+(p_slideGap*(p_allSlideCount-1))+'px';

//슬라이드의 너비만큼 중앙으로 위치이동. (안하면 복사본의 첫페이지만 보기때문)
let p_moveAmount = p_slideWidth*p_slideCount+p_slideGap*p_slideCount;
p_slideContainer.style.transform = `translateX(-${p_moveAmount}px)`;


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
p_slideContainer.style.left = `${-num*(p_slideWidth+p_slideGap)}px`;
p_currentIdx = num;

  if(p_currentIdx === p_slideCount*2-p_maxSlides){
    setTimeout(()=>{
      p_slideContainer.classList.remove('animated');  //눈속임
      p_slideContainer.style.left = `-${(num-p_slideCount)*(p_slideWidth+p_slideGap)}px`;
      p_currentIdx = num-p_slideCount;
    }, 500);

    //다시 animated 붙혀주기
    setTimeout( () => {
      p_slideContainer.classList.add('animated');
    }, 600)
  }
  console.log(p_currentIdx);


if(p_currentIdx === -p_slideCount){
  setTimeout(()=>{
    p_slideContainer.classList.remove('animated');  //눈속임
    p_slideContainer.style.left = '0px';
    p_currentIdx = 0;
  }, 500);

  //다시 animated 붙혀주기
  setTimeout( () => {
    p_slideContainer.classList.add('animated');
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
// p_nextBtn.addEventListener('click', debounce( ()=>{  
//   moveSlide(p_currentIdx + 1); 
// }, 500) );

// p_prevBtn.addEventListener('click', debounce( ()=>{ 
//   moveSlide(p_currentIdx - 1); 
// }, 500) );


