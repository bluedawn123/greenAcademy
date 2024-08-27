const wrapper = document.querySelector('#wrapper');
const carImage = document.querySelector('#carImage');
const rotateBtn = document.querySelector('#rotateBtn');

let save = 0;
let dragged = 0;
let sum = 0;
const sensivity = 50;

let clickedSrc = '';
let changeSrc = '';

let isRotateEnabled = false; // 회전 기능 활성화 여부

// 버튼을 클릭하면 회전 기능을 활성화
rotateBtn.addEventListener('click', function() {
    isRotateEnabled = true;
    rotateBtn.textContent = '회전 활성화됨';
});

// 이미지 클릭 이벤트
carImage.addEventListener('mousedown', function(e){
    if (!isRotateEnabled) {
        // 회전 버튼이 클릭되지 않았으면 작동하지 않음
        alert("먼저 '360도 회전' 버튼을 눌러주세요.");
        return;
    }

    const x = e.clientX;
    clickedSrc = carImage.src;

    wrapper.addEventListener('mousemove', rotate);

    function rotate(e){
        dragged = parseInt( (e.clientX - x) / sensivity);
        sum = save + dragged;

        if(dragged >= 0){
            sum = sum % 49;
        } else {
            if(sum < 0){
                sum += 50;
            }
        }

        changeSrc = clickedSrc.replace(/k[0-9]+/, "k" + sum);
        carImage.src = changeSrc;
        wrapper.style.cursor = "grabbing";
    }

    window.addEventListener('mouseup', function(){
        wrapper.removeEventListener('mousemove', rotate);
        wrapper.style.cursor = "default";
        save = sum;
        dragged = 0;
    });
});
