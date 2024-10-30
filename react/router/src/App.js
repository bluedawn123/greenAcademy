import './App.css';
import { Routes, Route ,Link , NavLink, useParams    } from "react-router-dom";

let contents = [
  {id:1, title:'HTML', desc:'HTML is ...'},
  {id:2, title:'CSS', desc:'CSS is ...'},
  {id:3, title:'Javascript', desc:'Javascript is ...'}
];


function Home() {
  return (
    <div>
     <h2>Home</h2>
     <nav>      
        <Link to="/Topics">Topics</Link>
        <Link to="/Contact">Contact</Link>
     </nav>
    </div>
  );
}
function Topics() {
  let list = [];
  for(let i = 0; i<contents.length; i++){
    list.push(<li><NavLink to={"/Topics/"+contents[i].id}>{contents[i].title}</NavLink></li>);
  }
  return (
    <div>
     <h2>Topics</h2>
     <nav> 
        <ul>
          {list}
        </ul>     
     </nav>
     <Routes>
        <Route path=":topic_id" element={<Topic />} /> 
      </Routes>
    </div>
  );
}
function Topic(){
  let Params = useParams();
  console.log(Params);
  return(
    <div>
      <h3>Topic</h3>
      <p>Topic ...</p>
    </div>
  )
}
function Contact() {
  return (
    <div>
     <h2>Contact</h2>
     <nav>      
        <Link to="/">Home</Link>
        <Link to="/Topics">Topics</Link>
     </nav>
    </div>
  );
}
function App() {
  return (
    <div className="App">
     <h1>router</h1>
     <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
     </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />     
      </Routes>
    </div>
  );
}

export default App;
