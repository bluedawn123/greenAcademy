//객체 생성후 사용 방법1
let front = {
  a : 'html',
  b : 'css',
  c : 'js'
}

let back = {
  a : 'php',
  b : 'java',
  c : 'node'
}
console.log(front.a)
//객체는 변수와 함수로 구성.

//객체 생성후 사용 방법2 함수로 객체 생성
function front1(){
  this.a = 'hetml';
  this.b = 'cute';
  this.c = 'sf123';
}

//객체 만들때 new사용
let frontlangs = new front1(); //함수를 통해 객체가 생성되면 Instance라고 부른다.
console.log(frontlangs.b)


//객체 생성후 사용 방법2-1 함수로 객체 생성
function lang(x, y, z){
  this.a = x;
  this.b = y;
  this.c = z;
}
let test = new lang('junho', 'mingi', 'yona');
console.log(test); //lang {a: 'junho', b: 'mingi', c: 'yona'}
console.log(test.a); //junho
console.log(test.a, test.b);  //junho, mingi



//객체 생성후 사용 방법3 class
class langs{
  constructor(x,y,z){
    this.a = x;
    this.b = y;
    this.c = z;
  }
}

let fontlanguage = new langs('html', 'css', 'javascript');
console.log(fontlanguage.a)   //'html'


//extends를 통한 클래스 상속(확장)
//객체와 함수가 같이 있는 class를 만들어보자.
class Web {
  constructor(skill){
    this.tech = skill;
  }
  present(){
    return `나는 이제 ${this.tech}를 할 수 있다.`
  }
}

class Stack extends Web{
  constructor(skill, step){
    super(skill);  //this.tech = skill;
    this.stage = step;
  }
  show(){
    return `${this.present()} 그래서 ${this.stage}는 마스터했다.`
  }
}

let mySkill = new Web('html')
//console.log(mySkill.tech);  'html'
//console.log(mySkill.present()); 나는 이제 html를 할 수 있다.


let myStack = new Stack('html', '초보')
//console.log(myStack.tech);  'html'
//console.log(myStack.show()); 나는 이제 html를 할 수 있다. 그래서 초보는 마스터했다.

//stack export
export default Stack;
