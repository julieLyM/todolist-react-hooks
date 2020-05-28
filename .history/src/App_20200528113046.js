import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <h1>todo</h1>
      <TodoForm addTodo={addTodo} />
      <Todo
    </div>
  );
}

export default App;
