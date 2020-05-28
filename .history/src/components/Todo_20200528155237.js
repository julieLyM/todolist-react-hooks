import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClic = () => {
    toggleComplete(todo.id);
  };

  function handleRemove() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" onClick={handleCheckboxClic} />
      <li
        style={{
          color: 'blue',
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Todo;
