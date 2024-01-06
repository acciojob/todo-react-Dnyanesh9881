
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const [todo, setTodo]=useState("");
   const [todoList, setTodoList]=useState([]);
   const [id , setId]=useState(1);

function changeTodo(e){
   setTodo(e.target.value)
}

function addTodo(e){
    e.preventDefault();
    setTodoList([...todoList, {id:id, title:todo}])
   setId(id+1);
   setTodo("");
}

function deleteTodo(delete_Id){
   
  setTodoList(todoList.filter(item=> item.id!==delete_Id));
}
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={addTodo}>
          <input type="text" onChange={changeTodo}
          value={todo}
          />
          <button>Add Todo</button>
        </form>
        <ul>
          {
            todoList.map(item =>{
         return (<li id={id}>
            {item.title} 
            <button onClick={()=>deleteTodo(item.id)}> Delete </button> 
            </li>)
            }
            )
          }
        </ul>
    </div>
  )
}

export default App
