import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(()=> {
    // DO NOT FORGET forward slash at the end
    axios
    .get("http://localhost:8000/api/todos/")
    .then((res)=> {
      console.log(res.data)
      setTodoList(res.data)
    })
    .catch((err) => console.log)
  }, [])

  return (
    <div className="App">
      <div>
          {todoList.map((todo) => {
            return(
              <div style={{color: todo.completed ? 'green' : 'red' }}>
                  <h3> {todo.title} </h3>
                  <p> {todo.description}</p>
              </div>
              )
          })}
        
      </div>
    </div>
  );
}

export default App;
