import React from 'react';

const TodoList = ({ todos }) => {
  return <div>
      <ul>
          {todos.map(e => e)}
      </ul>
  </div>;
};

export default TodoList;
