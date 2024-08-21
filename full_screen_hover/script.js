const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');

for(let link of links){
  const img = new Image();  //비어있는 img tag를 생성 <img src="">
  img.src = link.dataset.bg ; // link.getAttribute('data-bg');
  
  link.addEventListener('mouseenter',()=>{
    bg.style.backgroundImage = `url('${link.getAttribute('data-bg')}')`;
    bg.classList.add('active');
  })
  link.addEventListener('mouseleave',()=>{
    bg.classList.remove('active');
  })
}