// 변수 지정
let slideWrapper = document.querySelector('.slide-wrapper');
let slides = document.querySelectorAll('.slide-container li');
let slideCount = slides.length  //5
let currentIdx = 0;
let autoFade;
//열자마자 첫 슬라이드 일단 보이게.
slides[0].classList.add('active');

/*
한번체크
let 대상 = setTimeout(할일, 시간);  clearTimeout(대상)

일정시간마다 할일
let 대상 = setInterval(할일, 시간); clearInterval(대상)
*/

function autoFadeStart(){
    autoFade = setInterval(()=>{
        let nextIdx = (currentIdx+1) % slideCount; //1,2,3,4,0,1,2...
    
        slides[currentIdx].classList.remove('active');
        slides[nextIdx].classList.add('active');
    
        currentIdx = nextIdx;
    }, 4000)
}

autoFadeStart();


//마우스 들어왔을때 슬라이드 멈춤
slideWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoFade);
})
slideWrapper.addEventListener('mouseleave', () => {
    autoFadeStart();
})
// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기


// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)


// 좌우 버튼 클릭으로 슬라이드 이동시키기



// 페이저로 슬라이드 이동하기


// 자동 슬라이드 
