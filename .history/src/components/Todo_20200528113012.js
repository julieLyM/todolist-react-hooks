import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <li>{todo}</li>
      <button>X</button>
    </div>
  );
};

export default Todo;
