import { useEffect, useState } from 'react';
import './App.css';

function Article(props){
  return(
    <article>
      <h1>글번호 : {props.id}</h1>
      <h2>{props.title}</h2>
      <h3>{props.desc}</h3>
    </article>
  )
}

function Nav({list, clickme} ){
  //console.log(list) task.json에 들어있는 데이터가 저장되어있다.
  /*
  list 배열의 값을 이용하여 listHTML 배열 생성
  listHTML에는 <li><a href="1"> UI/UX개발 </a></li>  <-이 형식으로 3개가 되도록 
  */
  const listHTML = list.map( i => 
      <li key={i.id}>
        <a href={i.id} data-id={i.id} onClick={(e) => {
          e.preventDefault();
          let idx = e.target.dataset.id;
          // let idx = e.target.getAttribute('href');
          clickme(idx);

        }}>{i.title}</a>
      </li>
  );

  return(
    <nav>
      <ul>
        {listHTML}
      </ul>
    </nav>
  )
}

function App() {
  const [article, setArticle] = useState({
    title : 'welcome',
    desc : 'hello, React and Ajax'
  })

  const [list, setList] = useState([]);

  useEffect(() => {
    //자료먼저 불러오기
    //app.js에서 만드는 거든 뭐든 index.html에서 실행이 된다. 그러므로 index.html기준으로 경로를 불러와야 한다.
    fetch('./data/task.json')
    .then(res=> res.json()) //응답의 결과가 javascript 의 object로 생성된다. 그걸 다음 then에서 받음
    .then(result => {
      setList(result)
    });
  }, [])

  // console.log(list); task.json에 들어있는 데이터가 저장되어있다.

  return (
    <div className="App">
      <h1>프론트엔드 개발자</h1>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
      <Nav 
        list={list} 
        clickme={id => {
          console.log(id);
          fetch(`./data/${id}.json`)
            .then(res=> res.json()) 
            .then(result => {
              setArticle({
                id : result.id,
                title : result.title,
                desc : result.desc
              })
          });
      } } 
      />

      <Article title={article.title} desc={article.desc}/>
    </div>
  );
}

export default App;
