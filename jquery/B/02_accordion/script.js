/*
slideDown(), slideUp(), slideToggle() 이 있다.
*/


const question = $('.question');
const answer = $('.answer');


/*
question 클릭하면, 모든 answer을 접고
클릭한 그 요소 다음 요소를 펼친다. 
*/

question.click(function(){
    $(this).next().slideToggle();
    $(this).next().siblings('div').slideUp();
  });