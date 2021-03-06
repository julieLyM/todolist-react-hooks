import React, { useState } from 'react';
import { v4 as uuidv4 as uuid } from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid });
      setTodo({ ...todo, task: '' });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          onChange={handleTaskInputChange}
          type="text"
          value={todo.task}
        />
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default TodoForm;
