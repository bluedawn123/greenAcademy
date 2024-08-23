$(function(){
  /*
  $(선택자).css('속성명', '값');  
  */
  $('h1').css('color','blue');

  /* 클래스명 list를 silver */       
  $('.list').css('background','silver');

  $('#box div div').css('background','silver');

  /*
  h2 요소의 투명도 50%
  20도 회전
  */
  // $('h2').css('opacity', '50%');
  // $('h2').css('transform', 'rotate(20deg');
  // $('h2').css('transform-origin', '0 0')

  $('h2').css({ opacity:'50%', transform:'rotate(20deg)', transformOrigin:'0 0'});


  const myp = $('p');
  /*p 폰트사이즈 1.5em, 폰트는 기울임체 */
  // myp.css('font-size', '1.5em')
  // myp.css('color', 'red')
  // myp.css('font-style', 'italic')

  myp.css({fontSize:'1.5em', fontStyle:'italic'})



});  