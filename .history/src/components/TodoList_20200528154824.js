import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleCompleted, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
          
            todo={todo}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
