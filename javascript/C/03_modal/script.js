const images = document.querySelectorAll('.gallery img')
console.log(images) //NodeList(4)

const lightbox_overlay = document.querySelector('#lightbox-overlay');
console.log(lightbox_overlay)//<div id="lightbox-overlay"> ... </div>

const lightbox_image = document.querySelector('#lightbox-image');



/*
대상.getAttribute('속성명) 
let c = a.getAttribute('b')  => a의 속성명b의 값을 c에 할당.

대상.setAttribute('속성명', '새값')
a.setAttribute('b', 'c')  => a의 속성명b의 값을 c로 변경. 없으면 c로생성
*/

/*
전체적인 구상
각 사진을 대상으로 클릭했지만, 클릭시 나타나는 사진의 경로가 없으므로
클릭한 사진의 경로를 추출해서
클릭하고 등장하는 큰 사진의 경로가 없으므로 거기에 넣어준다.
그리고 보이게 하려고 visible로 바꿔주고
마지막으로 다른 곳 클릭시 사라지게 만드는 과정.
*/

images.forEach( (item, idx, all) => {
    item.addEventListener('click', (e)=> {
        e.preventDefault();  //기본기능멈추기.여기선 a링크의 기본속성

        let largeImg = item.getAttribute('data-lightbox')
        console.log(largeImg) // images/img-03-large.jpg
        
        //lightbox_image의 src에 largeImg(경로)를 넣어보자
        lightbox_image.setAttribute('src', largeImg);

        //lightbox_overlay를 표시
        lightbox_overlay.classList.add('visible');
    })
})

lightbox_overlay.addEventListener('click', function(){
    lightbox_overlay.classList.remove('visible');
})
