import React from "react";
import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="App">
      <TodoForm />
      <Todo />
    </div>
  );
}

export default App;
