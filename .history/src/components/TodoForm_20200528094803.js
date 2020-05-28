import React, { useState } from 'react';

const TodoForm = () => {
  const [Todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  const handleTaskInputChange(e) = () => {
      setTodo({})
  }

  return (
    <div>
      <form onSubmit={}>
        <input onChange={} />
        <button>click</button>
      </form>
    </div>
  );
};

export default TodoForm;
q;
