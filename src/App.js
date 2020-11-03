import React, { useState } from "react";
import Todo from './components/Todo'
import './App.css';

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({
    name: input,
    id: Math.floor(Math.random() * 1000)
  })

  const addTodo = (event) => {
    event.preventDefault()

    const todo = ({ name: input, id: Math.floor(Math.random() * 1000) })
    setTodo(todo);
    setTodos([...todos, todo])

    setInput('')
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <form>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" disabled={!input} onClick={addTodo}>Add Todo</button>
      </form>



      {
        todos.map(todo => (
          <Todo name={todo.name} key={todo.id} />
        ))
      }



    </div>
  );
}

export default App;
