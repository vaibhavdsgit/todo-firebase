import { useEffect, useState } from 'react';

import './App.css';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {db} from './firebase_config';
import firebase from 'firebase/compat/app';
import TodoListItem from './Todo/Todo';

function App() {

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const getTodos = () =>{
    db.collection("todos").onSnapshot((querySnapshot)=>{
      setTodos(querySnapshot.docs.map((doc)=>(
        {
          id: doc.id,
          todo: doc.data().todo,
          inProgress: doc.data().inProgress
        }
      )))
    })
  }

  useEffect(getTodos,[])

  const addTodo=(event)=>{
    event.preventDefault();
    db.collection("todos").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })
    setTodoInput("");
  }

  return (
    <div className="App">
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>ToDo App with Firebase</h1>
        <form onSubmit={addTodo}>
          <TextField 
            id="standard-basic" 
            label="Write a Todo" 
            variant="standard" 
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e)=>setTodoInput(e.target.value)}
          />
          <Button variant="contained" type="submit" style={{ display: "none" }}>Add Todo</Button>
        </form>
        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo)=>(
            <TodoListItem todo={todo.todo} inProgress={todo.inProgress} id={todo.id} />
          ))}
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
