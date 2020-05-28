import React from 'react';
import Todo from './Todo';
const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
