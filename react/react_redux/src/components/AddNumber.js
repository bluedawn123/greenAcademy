import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'

function AddNumber(){
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return(
    <div>
        <h3>Add Number</h3>
        <input type="text" value={count} />
        <button onClick={ () => dispatch(increment())}>Add</button>
      </div>
  )
}













/*
class AddNumber extends Component {
  state = {num : 1}


  render() {
    return (
      <div>
        <h3>Add Number</h3>
        <input type="text" value={this.state.num} onChange={(e) => {
          this.setState({num : e.target.value})

        }}/>
        <button onClick={(e)=>{
          this.props.onclick(Number(this.state.num));
        }}>Add</button>
      </div>
    )
  }
}
*/

export default AddNumber;
