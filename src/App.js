import React, { useState } from "react";
import Todo from './components/Todo'
import './App.css';

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = (event) => {
    event.preventDefault()

    setTodos([...todos, input])

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
        todos.map((todo) => (
          <Todo name={todo} />
        ))
      }

    </div>
  );
}

export default App;
