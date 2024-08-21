const links = document.querySelectorAll('.mynav a');
const target = document.querySelector('.target');
const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

console.log(links);

for(let link of links){
  link.addEventListener('mouseenter',()=>{
    if(!link.classList.contains('active')){
      let color = colors[Math.floor(Math.random()*colors.length)];
      for(let item of links){
        item.classList.remove('active');
      }
      link.classList.add('active');

      target.style.width = link.offsetWidth+'px';
      target.style.left = link.getBoundingClientRect().left +'px';
      target.style.top = link.getBoundingClientRect().top+'px';
      target.style.borderColor = color;
    }

  });
}