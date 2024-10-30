import Todo from './Todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import { useState, React } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [todo, setTodo] = useState([
    {id :1, text:'learn web'},
    {id :2, text:'get a job'}
  ])
  const [todoId, setTodoId] = useState(2);
  
  let addTodo = (value) => {
    let newTodos = [...todo];  //초기값.위의 기존의 2개의 todo들
    let newId = todoId + 1;    //초기값.위 숫자(예비2)
    setTodo(newId);
    newTodos.push({id:newId, text:value, checked:false});

    //newTodos가 변경되었으모로 이거을 기존의 todo에 setTodo를 사용해서 바꿔야한다.
    setTodo(newTodos);
    document.querySelector('#todo').value = '';
  }

  let todoUpdate = (id, value) => {
    let newTodos = todo.map( item => item.id === id ? {...item, checked:value}: item)
    setTodo(newTodos);
  }

  let deleteTodo = (id) => {
    let newTodos = [...todo];

    //일치하는 녀석만 return 해주고 그녀석만 지워야한다.
    let idx = newTodos.findIndex(item => item.id === id);
    newTodos.splice(idx, 1)
    setTodo(newTodos);
  }

  //data라는 이름으로 item을 실어서 보낸다. map함수로 item은 모두 담긴다.
  let todos = todo.map( (item, index) => 
    <Todo data={item} key={index} todoUpdate={todoUpdate} deleteTodo={deleteTodo}/> ) 

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form onSubmit={ (e) => {
        e.preventDefault();
        // console.log(e.target.todo.value); 입력창에서 입력한 게 잘 나온다.
        addTodo(e.target.todo.value);
      }}>
        <Form.Group className="mb-3" controlId="todo">
          <Form.Label>할일 입력</Form.Label>
          <Form.Control type="text" placeholder="할일 입력" name="todo"/>
        </Form.Group>
        <Button type="submit" variant="primary">전송!!</Button>
      </Form>
      <hr/>
      <div>
        {todos}
      </div>
    </div>
  );
}

export default App;
