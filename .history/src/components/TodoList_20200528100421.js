import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
