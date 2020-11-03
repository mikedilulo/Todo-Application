import React, { useState } from 'react'

const Todo = (props) => {

  return (
    <div className="todo">
      <p>Name: {props.name}</p>
    </div>
  )
}

export default Todo