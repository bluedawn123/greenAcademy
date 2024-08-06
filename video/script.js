const video = document.querySelector('#vivaldi');
const vplay = document.querySelector('#vplay');
const vpauseBtn = document.querySelector('#vpause');
const vstopBtn = document.querySelector('#vstop');
const bar = document.querySelector('.progress .bar')
const aplayBtn = document.querySelector('#aplay');
const apauseBtn = document.querySelector('#apause');
const bee = document.querySelector('#bee');

const vcontrols = document.querySelector('.vwrapper #controls');



/* 대상.play()  대상.pause() */

vplay.addEventListener('click', () => {
    video.play();
})

vpauseBtn.addEventListener('click', () => {
    video.pause();
})

aplayBtn.addEventListener('click', () => {
    bee.play();
})

apauseBtn.addEventListener('click', () => {
    bee.play();
})

// vcontrols 클릭하면 할일. 클래스명active가 없으면 추가, 있으면 제거
vcontrols.addEventListener('click', () => {
    vcontrols.classList.toggle('active');
    if(vcontrols.classList.contains('active')){
        video.pause();
    
    }else{
        video.play();
        const duration = video.duration;


        //현재 퍼센트를 구해서 bar에 준다. 
        let timer = setInterval( () => {
            let ct = video.currentTime;
            let percent = ct/duration*100;
            bar.style.width = percent + '%';
            if(percent === 100){
                clearInterval(timer);
            }
        }, 300)
        
        console.log(video.currentTime, duration);

    }
})

vstopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
})

