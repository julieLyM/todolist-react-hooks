import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return <div className="App">
    <h1>todo</h1>
    
  </div>;
}

export default App;
