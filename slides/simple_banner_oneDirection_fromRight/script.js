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
    item.style.left = `${idx*100}%`    //가로배치
  });
pager.innerHTML = pagerHTML;

const pagerBtn = pager.querySelectorAll('a');

pagerBtn.forEach( (pager, idx) => {
    pager.addEventListener('click', (e) =>{
        e.preventDefault();
        showSlide(idx);
    })
})

function showSlide(num){
    console.log(num);
    if(currentIdx === num) return; /*만약 지금내가보고있는게 같은거면 아무것도 안함 */

    let currentSlide = slides[currentIdx];
    let nextSlide = slides[num];

    currentSlide.animate( [ {left: '0%'}, {left: '-100%'}], {duration:2000, fill:'forwards'} );
    nextSlide.animate( [ {left: '100%'}, {left: '0%'}], {duration:2000, fill:'forwards'} );

    /*현재슬라이드 left 0 => -100%
      다음슬라이드 left 100% => 0
    */

    currentIdx = num;  //지금보고있는것
}

showSlide(0)