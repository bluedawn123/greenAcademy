const rowsPerPage = 10;  //한페이지에 tr을 몇개 보여줄까
const rows = document.querySelectorAll('#my-table tbody tr'); 
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);   //tr의갯수/한페이지의 tr갯수 => 페이지의 갯수. (100/9 11.1 => 12개 생성.. )
const numbers = document.querySelector('#numbers'); 
const maxPageNum = 3;     //한 페이지의 최대페이지 수

//현재보고있는 페이지 그룹 번호
let pageActiveIdx = 0;  //0이면 1,2,3  1이면 4,5,6  2면 7,8,9. 현재 보고있는 페이지인덱스
const prevBtn = document.querySelector('.pagination .fa-arrow-left')
const nextBtn = document.querySelector('.pagination .fa-arrow-right')

/*내용을 출력(생성)
대상.innerHTML = 'TAG';    대상.innerText = 'text';
numbers에다가 a태그 생성 //numbers.innerHTML = `<li><a href="">1</a></li>` 가 반복문으로 들어가야함.
*/

// numbers.innerHTML += `<li><a href="">1</a></li>`
// numbers.innerHTML += `<li><a href="">2</a></li>`
// numbers.innerHTML += `<li><a href="">3</a></li>`
//                 ... 반복
//빈 껍데기 만들고 거기에 넣고 그걸 다시 numbers.html 에 넣는 방식
let numberHTML = '';
for(let i = 1; i<=pageCount; i++){
    numberHTML += `<li><a href="">${i}</a></li>`;
}
numbers.innerHTML = numberHTML;

const numberBtn = numbers.querySelectorAll('a');
const pageGroupCount = Math.ceil(pageCount / maxPageNum);  // 올림(페이지의 총 갯수 / 최대페이지 수) 올림(10/3)=> 4....

console.log(numberBtn)

//전체 tr에 대해서 안보이게 하고 보이게설정한tr들을 보이게 만든다. displayRow(0)이면 1~9번만 보이도록..
function displayRow(num){
    // 모든 tr을 보이지 않게 한다.
    rows.forEach( (item, idx, all) => {
        item.style.display = 'none';
    })
    // num = 0이면, rows.slice(0,10) ||| num = 1이면 rows.slice(10,20)
    // 인덱스 번호로 배열에서 요소 추출하는 함수 -> 대상.slice(start, end)
    let rowsArray = [...rows]

    // rowsArray.slice(0, 10) 1~9번 보임 ||| 10~19번보임 rowsArray.slice(10,20) ...
    
    let start = rowsPerPage * num;
    let end = start + rowsPerPage;   

    let newRows = rowsArray.slice(start, end);
    console.log(newRows)

    for(let item of newRows){
        item.style.display = '';  //displayRow(숫자); 숫자에 들어간 건 보이게!
    }
}
displayRow(0);

//numberBtn을 누르면 할일
//클릭, 이벤트막기, displayNow함수 활성화(해당숫자로만)
numberBtn.forEach( (item, idx, all) => {
    item.addEventListener('click', (e) =>{
        e.preventDefault();
        displayRow(idx);

        /*numberBtn의 모든 원소에서 active를 제거하고 클릭한 그 요소에만 active추가 */
        for(eachBtn of numberBtn){
            eachBtn.classList.remove('active');
        }
        e.target.classList.add('active');
    })
})

//
function displayPagination(num){
    //모든 숫자버튼안보이게
    numberBtn.forEach( (item, idx, all) =>{
        item.style.display = 'none';
    })

    /*
    num 0 => (0, 3)
    num 1 => (3, 6)
    num 2 => (6, 9)
    */
    let start = maxPageNum * num;
    let end = start + 3;

    let pArray = [...numberBtn];
    let np = pArray.slice(start, end);
    for (let item of np){
        item.style.display ='';
    }

    //하는이유...? 시작점에서 하이라이트 주기위해서.
    for(item of numberBtn){
        item.classList.remove('active');
    }
    numberBtn[start].classList.add('active');
    
    //???
    displayRow(start);

    //pageAcitveIdx는 현재 보고 있는 페이지 이므로, 
    pageActiveIdx = num;
    console.log(pageActiveIdx)

    if(pageActiveIdx == 0){
        prevBtn.style.display = 'none';
    }else{
        prevBtn.style.display = 'block';
    }

    //pageGroupCount = Math.ceil(pageCount / maxPageNum);
    //올림(페이지의 숫자/한페이지최대수)
    //즉, 
    if(pageActiveIdx == pageGroupCount - 1){
        nextBtn.style.display = 'none';
    }else{
        nextBtn.style.display = 'block';
    }

}

displayPagination(1);



//버튼 기능
nextBtn.addEventListener('click',  () => {
    displayPagination(pageActiveIdx + 1);
})

prevBtn.addEventListener('click',  () => {
    displayPagination(pageActiveIdx - 1);
})




