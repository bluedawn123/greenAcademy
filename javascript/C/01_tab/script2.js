
let tabMenu = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div')
console.log(tabContent)  //NodeList(3) [div#tabs-1.active, div#tabs-2, div#tabs-3]
console.log(tabMenu.length) //3

//아무거나 클릭했을때 클래스 제거
//     for(let i = 0; i < tabMenu.length; i ++){
//         tabMenu[i].addEventListener('click', function(e){
//         e.preventDefault();

//         //모든걸 다 뺸다!
//         for(let j = 0; j < tabMenu.length; j++){
//             tabMenu[j].classList.remove('active');
//         }
//         //클릭시 클릭한 것만 클래스 추가
//         tabMenu[i].classList.add('active');
        

//         //역시 모든 tabContent안에서 active 제거
//         for(let j = 0; j < tabContent.length; j++){
//             tabContent[j].classList.remove('active');
//         }
//         tabContent[i].classList.add('active');
//     })

// }

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

tabMenu.forEach((item, index, all) => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        tabMenu.forEach( item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    
        tabContent.forEach( item => {
            item.classList.remove('active');
        })
        tabContent[index].classList.add('active');
        
    })
})
