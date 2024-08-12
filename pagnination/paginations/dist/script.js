const rowsPerPage = 10;  //한페이지에 몇개 보여줄까
const rows = document.querySelectorAll('#my-table tbody tr'); 
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);   //페이지의 갯수. (100/9 11.1 => 12개 생성.. )
const numbers = document.querySelector('#numbers'); 

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
console.log(numberBtn)

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
numberBtn.forEach( (item, idx, all) => {
    item.addEventListener('click', (e) =>{
        e.preventDefault();
        displayRow(idx);
    })
})









