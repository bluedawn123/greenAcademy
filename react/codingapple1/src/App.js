// import logo from './logo.svg';
/*eslint-disable*/

import { useState } from 'react';
import './App.css';

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [따봉, 따봉변경] = useState(0);
  let [logo, setLogo] = useState('React Blog')
  let posts = '강남 우동 맛집';
  let [modal, setModal] = useState(false);  //상태관리

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button>정렬</button>

      <button onClick={ ()=>{ 
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy)
    } }> 수정버튼 </button>

      <button onClick={ ()=>{ 
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      } }> 정렬버튼 </button>

      <div className="list">
        <h4 onClick={ ()=>{ setModal(!modal) } }> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ 글제목[1] }  <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ setModal(!modal) } }>{ 글제목[2] }  <span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>

      {/* <button onClick={ ()=>{ setModal(true) } }> {글제목[0]} </button> */}
      { 
         modal == true ? <Modal></Modal> : null
      }

    </div>
  )
}

function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
