import React from 'react';

const TodoList = ({ todos }) => {
  return <div>
      <ul>
          {todos.map(todo => (
              <Todo
          ))}
      </ul>
  </div>;
};

export default TodoList;
