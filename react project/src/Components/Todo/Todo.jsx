import classes from '../Todo/todo.module.css'
import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo/EditTodo';
import { FiEdit } from "react-icons/fi";
const Todo=()=>{
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
 const [toggleEditBlock, setToggleEditBlock] = useState(null)

 const todoDataReq = async ()=> {
  await fetch('http://localhost:4000/todo',
  {
    method:"GET",
    headers:{"content-type":"application/json"}
   }).then(res => res.json())
  .then(res => setTodos(res))
}

useEffect(() => {
  todoDataReq()
},[])

  const addTodo =  async () => {
    if (todoText.trim() !== '') {
    fetch('http://localhost:4000/todo',
  {
    headers:{"content-type":"application/json"},
    method:"POST",
    body : JSON.stringify( { text: todoText, completed: false })
   }).then(res => res.json()).then(res => res)
   setTodoText('');
   todoDataReq()
    }
  };

  const removeTodo = async(id)=>{
    await fetch(`http://localhost:4000/todo/${id}`,
    {
      method:'DELETE',
      headers:{"content-type":"application/json"}
     }).then(res => res.json()).then(res => res)
     setTodos(todos.filter(todo => todo.id !== id))
  }
 

  const toggleTodoCompletion = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
 
const closeEditBlock = () => {
  setToggleEditBlock(null)
}

  return (
    <div className={classes.todoRot}>
        <div className={classes.conteiner}>
          <div className={classes.todo}>
      <h1>Todo List</h1>
      <input
      className={classes.input}
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <button className={classes.btn} onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodoCompletion(index)} />
                {
                  toggleEditBlock === todo.id ?
                  <EditTodo 
                  setTodos={setTodos}
                  closeEditBlock={closeEditBlock}
                  id={todo.id}
                  itemData={todo}
                   />
                  :
                  <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                  }}
                  >
                {todo.text}
              </span>
              }
              <button style={{color:"green"}} className={classes.btns} onClick={() => setToggleEditBlock(todo.id)  }><FiEdit /></button>
              <span className={classes.delbtn} onClick={() => removeTodo(todo.id)}>X</span>
            </li>
          );
        })}
      </ul>
          </div>
        </div>
    </div>
  );
}

export default Todo;