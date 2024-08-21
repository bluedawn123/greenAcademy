let btt = document.querySelector('.back-to-top');
let progressBox = document.querySelector('.progress-box');
let progressBoxOST = progressBox.offsetTop  - 400;// progressBox가 화면상단에 떨어진 거리
//let progressRate = progressBox.getAttribute('data-rate'); //45가 담기도록
let progressRate = Number(progressBox.dataset.rate); //45가 담기도록
let progressBar = progressBox.querySelector('.progress-bar');
let progressSpan = progressBox.querySelector('.content span');
let count = 0;
let excuted = false;
let inteval = 50;

window.addEventListener('scroll',()=>{
  if(window.scrollY > progressBoxOST){
    if(excuted == false){

      progressBar.style.width = progressRate+'%';
      progressBar.style.transition = progressRate*(inteval/1000)+'s';

      let timer = setInterval(()=>{
        count++;
        progressSpan.innerText = count;
        
        if(count === progressRate){
          clearInterval(timer);
        }
      }, inteval);
      excuted = true;
    }
  }
  /*
  스크롤양이 progressBoxOST 보다 많다면 할일
    progressRate의 숫자만큼 숫자가 올라가도록
    progressRate의 숫자만큼 progressBar의 너비를 늘려준다    
  */


  if(window.scrollY > 300){
    btt.classList.add('active');
  }else{
    btt.classList.remove('active');
  }
});

btt.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });
});

