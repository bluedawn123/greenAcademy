const slideWrapper = document.querySelector('.slidewrapper');
const slideContainer = slideWrapper.querySelector('.slidecontainer');
const slides = slideWrapper.querySelectorAll('.slide');
const pager = slideWrapper.querySelector('.pager');
const slideCount = slides.length;
let currentIdx = 0;
let timer;
let pagerHTML = '';

// 페이저 원슬라이드로 페이저 생성
slides.forEach((item,idx)=>{
    pagerHTML = pagerHTML + `<a href="#">${idx}</a>`;
    item.style.top = `${idx*100}%`    //가로배치
  });
pager.innerHTML = pagerHTML;

const pagerBtn = pager.querySelectorAll('a');

pagerBtn.forEach( (pager, idx) => {
    pager.addEventListener('click', (e) =>{
        e.preventDefault();
        showSlide(idx);
    })
})

// 
showSlide(0)



function showSlide(num){
    console.log(num);
    if(currentIdx === num) return; /*만약 지금내가보고있는게 같은거면 아무것도 안함 */

    let currentSlide = slides[currentIdx];
    let nextSlide = slides[num];

    currentSlide.animate( [ {top: '0%'}, {top: '-100%'} ], {duration:500, fill:'forwards'} );
    nextSlide.animate( [ {top: '100%'}, {top: '0%'} ], {duration:500, fill:'forwards'} );

    /*현재슬라이드 left 0 => -100%
      다음슬라이드 left 100% => 0
    */

    currentIdx = num;  //지금보고있는것

    updatePager();
}

function updatePager(){
  for (let pager of pagerBtn){
    pager.classList.remove('active');
  }
  pagerBtn[currentIdx].classList.add('active');
}
updatePager();

function autoSlide(){
  /*3초마다 다음 슬라이드 보이도록.
  let nextIdx = ???;
  showSlide(nextIdx); */
  timer = setInterval( ()=>{
    let nextIdx = (currentIdx + 1) % slideCount; 
    //왜냐? 여기선 4개이므로, 1,2,3,0,1,2,3,0,1,2순서로 반복되야 하므로

    showSlide(nextIdx); //showSlide(1,2,3,0,1,2,3...) 첨은 showSlide(0)이므로 제외.위에써놓음
  }, 3000);
  
}

autoSlide();

//마우스 들어왔을때는 slide멈추는 기능
slideWrapper.addEventListener('mouseenter', () => {
    clearInterval(timer);
})
slideWrapper.addEventListener('mouseleave', () => {
    autoSlide();
})