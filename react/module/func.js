/*
//방법1
export function func1(){
  document.querySelector('#title1').innerHTML = "hello";
}

//방법2
function func2(){
  document.querySelector('#title2').innerHTML = "world";
}

export{func2}; //여러개할때

*/

/*객체로 만들어서 보내기
const obj = {
  func1 : function(){
    document.querySelector('#title1').innerHTML = "hellosss";
  },

  func2 : function(){
    document.querySelector('#title2').innerHTML = "worldsss";
  }
}

export default obj;
*/

const obj = {
  func : function(target, msg){
    document.querySelector(target).innerHTML = msg;
  },
}
export default obj;