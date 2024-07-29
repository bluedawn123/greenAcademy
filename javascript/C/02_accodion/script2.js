let panel_question = document.querySelectorAll('.panel-heading');
// 대상의 부모선택 => 대상.parentNode
// 자식요소 찾기 => 대상.children. 모든 자식요소를 배열로 출력

/*panel-question을 클릭하면 할일
    모든 panel_question에서 active를 제거한다.
    for 반복문으로.
*/

//forOf로
for (const pq of panel_question) {
    pq.addEventListener('click', (e)=>{
        let parent = pq.parentNode
        console.log(parent) //<div class="panel-question">

        let grandParent = parent.parentNode;
        console.log(grandParent) //<section id="faq">

        let parentSiblings = [...grandParent.children] //HTMLCollection(3) [div.panel-question.active, div.panel-question.active, div.panel-question]
        console.log(parentSiblings) //[div.panel-question.active, div.panel-question, div.panel-question]


        parent.classList.toggle('active');
        // 1. active가 있는데도 닫히지 않는 이유? 토글은 떼는거아님?

        parentSiblings.forEach( item => {
            if(parent !== item){
                item.classList.remove('active');
            }
        })
    });
}