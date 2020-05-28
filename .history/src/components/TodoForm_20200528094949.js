import React, { useState } from 'react';

const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  return (
    <div>
      <form onSubmit={}>
        <input onChange={handleTaskInputChange} type="text" value=/>
        <button>click</button>
      </form>
    </div>
  );
};

export default TodoForm;
q;
