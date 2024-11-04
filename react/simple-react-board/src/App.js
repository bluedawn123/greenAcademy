
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BoardList from './BoardList';
import Button from 'react-bootstrap/Button';
import Write from './Write';

function App() {
  return (
    <div className="container">
      <h1>react board</h1>
      <BoardList/>
      <Write/>
    </div> 
  );
}

export default App;
