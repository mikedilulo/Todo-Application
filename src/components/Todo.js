import React, { useState } from 'react'

const Todo = (props) => {
  const [todos, setTodos] = useState([])

  const deleteTodo = todo => {
    todos.filter(todo => todo.id !== todo)
  }

  return (
    <div className="todo">
      <p>Name: {props.name}</p>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo