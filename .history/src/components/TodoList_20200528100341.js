import React from 'react';

const TodoList = ({ todos }) => {
  return <div>
      <ul>
          {todos.map()}
      </ul>
  </div>;
};

export default TodoList;
