import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleCompleted }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} toggleCompleted={toggleCompleted} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
