import React from 'react'

const Todo = (props) => {
  return (
    <div className="todo">
      <p>{props.name}</p>
    </div>
  )
}

export default Todo