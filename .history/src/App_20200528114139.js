import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.string)
  }, []);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <h1>todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
