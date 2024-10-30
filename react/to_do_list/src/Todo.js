import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Todo = ({data, todoUpdate, deleteTodo}) => {
  //체크할때마다 그 반대값으로.
  const [isChecked, setIsChecked] = useState(false);
  let className = '';
  const handleCheckboxClick = (e) => {
    let value = !isChecked;
    
    setIsChecked(value); //참이면 거짓으로, 거짓이면, 참으로.
    
    //사용자가 체크한 벨류와 숫자도 넘어가야한다
    todoUpdate(data.id, value);
  }
  if(isChecked){
    className = 'checked';
  }

  let todoDelete = () => {
    deleteTodo(data.id);
  }
  

  return(
    <div>
      <Form.Check type = "checkbox" id = {data.id}>
        <Form.Check.Input type = "checkbox" onClick = {handleCheckboxClick}/>
        <Form.Check.Label className={className}>{data.text}</Form.Check.Label>
        <Button variant='danger' size="sm" onClick={todoDelete}>삭제</Button>
      </Form.Check>
      
    </div>
  )
}

export default Todo;