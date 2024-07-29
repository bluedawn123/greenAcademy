
let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div')
console.log(tabContent)  //NodeList(3) [div#tabs-1.active, div#tabs-2, div#tabs-3]
console.log(tabMenu.length) //3

// tabMenu.forEach((item, index, all) => {
//     tabMenu[index].addEventListener('click', function(e){
//         e.preventDefault();

//         tabMenu.forEach( (item, index) => {
//         tabMenu[index].classList.remove('active');
//         })

//         tabMenu[index].classList.add('active');
    
//         tabContent.forEach( (item, index) => {
//         tabContent[index].classList.remove('active');
//         })
        
//         tabContent[index].classList.add('active');
//     })
// })

//이하 동일. 난 근데 위가 더 편한거 같다. 

tabMenu.forEach((item, index) => {
    item.addEventListener('click', function(e){
        e.preventDefault();



        for (let item of tabMenu){
            item.classList.remove('active');}
        item.classList.add('active');
    
        for(let item of tabContent){
            item.classList.remove('active');}
        tabContent[index].classList.add('active');
        
    })
})
