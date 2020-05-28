import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit

  return (
    <div>
      <form>
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
q;
