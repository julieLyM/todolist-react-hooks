import React from 'react';

const Todo = ({ todo, toggleComplete }) => {
  const handleCheckboxClic = () => {
    toggleComplete(todo.id);
  };

  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" onClick={} />
      <li
        style={{
          color: 'blue',
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
};

export default Todo;
