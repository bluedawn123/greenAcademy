const wrapper = document.querySelector('#wrapper');
const carImage = document.querySelector('#carImage');

let save = 0;
let dragged = 0;

let sum = 0;

const sensivity = 50;

let clickedSrc = '';
let changeSrc = '';

carImage.addEventListener('mousedown', function(e){
    const x = e.clientX;

    clickedSrc = carImage.src;

    wrapper.addEventListener('mousemove', rotate);
    function rotate(e){
        dragged = parseInt( (e.clientX - x) / sensivity);

        sum = save + dragged;

        if( dragged >= 0){
            sum = sum % 49;
        }else{
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
    })

})