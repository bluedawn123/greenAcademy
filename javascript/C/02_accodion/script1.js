let panel_question = document.querySelectorAll('.panel-question');
console.log(panel_question) //NodeList(3)

const collapseBtn = document.querySelector('#btn-collapse');


/*panel-question을 클릭하면 할일
    모든 panel_question에서 active를 제거한다.
    forOf반복문으로. */

//forOf로
for (const pq of panel_question) {
    pq.addEventListener('click', (e)=>{
        pq.classList.toggle('active');

        let clickedQuestion = e.currentTarget;

        panel_question.forEach( item => {
            //console.log(`item : ${item}`)  [object HTMLDivElement]
            if(clickedQuestion !== item){
                item.classList.remove('active');
            }
        })
    });
}

// collapseBtn 클릭시 모두 접기
collapseBtn.addEventListener('click', (e) =>{
    panel_question.forEach( item => {
        item.classList.remove('active');
    })
    
    //이하 동문
    // for(let pq of panel_question){
    //     pq.classList.remove('active');
    // }
})