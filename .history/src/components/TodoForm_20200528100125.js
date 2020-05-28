import React, { useState } from 'react';
import uu
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
    if(todo.task.trim()) {
        addTodo({...todo, id: uuid.v4()})
    }
  };

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
