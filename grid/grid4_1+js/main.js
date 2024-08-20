const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItem = imageList.querySelectorAll('li')
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view';
const dnone = 'd-none';
const rangeInput = document.querySelector('input[type="range"]');
const searchInput = document.querySelector('input[type="search"]');
const zoom = document.querySelector('.zoom');
const captions = imageList.querySelectorAll('figcaption p:first-child')
const count = document.querySelector('span');

// 입력되면 할일
rangeInput.addEventListener('input', (e) => {
    let userValue = e.target.value;

    //그냥암기하자. 직접정한 property 사용시. 
    //''안의 속성을 만들고 userValue로 지정.
    document.documentElement.style.setProperty('--minRangeValue', `${userValue}px`);
});

//버튼 클릭시 border생기게.
//일단 active있는거 지우고, 부모클래스에 active 주는 방식.
for(let btn of btns){
    btn.addEventListener('click', () => {
        let parent = btn.parentElement;

        document.querySelector('.view-options .active').classList.remove('active');
        parent.classList.add('active');

        if(parent.classList.contains('show-list')){
            imageList.classList.remove(gridView);
            imageList.classList.add(listView);
            zoom.classList.add(dnone);
        }else{
            imageList.classList.add(gridView);
            imageList.classList.remove(listView);
            zoom.classList.remove(dnone);
        }
    });
}

//입력창 관련.
/*검색시 모든 리스트가 사라진다. 
사용자가 입력한 키워드를 캐치한다. => e.target.value
배열에서 입력한 키워드가 있는 요소를 확인한다. 
=> 반드시 배열. includes는 참거짓으로 return해준다. 
해당 키워드가 포함된요소를 보여준다.
일치하는 요소의 개수를 확인하고 출력한다. 

특정 배열,문자가 있는 걸 확인하고 새 배열 만들어주기 => 

*/

//(제목)그냥 [...]하면 유사배열을 배열로. p태그만 들어있다. 
//구별이 안되므로 빈배열로 만들고 거기에 숫자 추가.
const captionArr = []; 
let counter = 0; //숫자를 지정해주기 위해서.


for(let caption of captions){
    captionArr.push({
        id:counter++,
        text:caption.textContent,

        }
    )
}

console.log(imageListItem);




searchInput.addEventListener('change', (e) => {
    let keywords = e.target.value


    imageListItem.forEach( (item, idx, all) => {
        item.classList.add('d-none')
    })

    let filteredArr = captionArr.filter(caption => caption.text.includes(keywords) ); 
    console.log(filteredArr); // [{…}, {…}, {…}] 그리고 안에는 id와 text가 들어있다. 

    for(let item of filteredArr){
        imageListItem[item.id].classList.remove(dnone);
    }

    //count 갯수변경
    count.innerText = filteredArr.length;
})