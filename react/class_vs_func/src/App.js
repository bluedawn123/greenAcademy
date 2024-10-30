import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>함수형 클래스형 비교</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}
function FuncComp({initNumber}){
  return(
    <div className="container">
      <h2>함수형 컴포넌트</h2>
      <p>Number: {initNumber}</p>
    </div>
  )
}

class ClassComp extends Component{
  state = {
    number:this.props.initNumber
  }
  render(){
    return(
      <div className="container">
        <h2>클래스형 컴포넌트</h2>
        <p>Number: {this.state.number}</p>
        <input type="button" value="random" onClick={()=>{
          this.setState({
            number:Math.random()
          })
        }}></input>
      </div>
    )
  }
}

export default App;
