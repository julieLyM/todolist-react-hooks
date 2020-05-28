import React, { useState } from 'react';

const TodoForm = () => {
  const [Todo, setTodo] = useState({
    id: '',
    task: '',
  });
  return (
    <div>
      <form>
        <input />
        <button>click</button>
      </form>
    </div>
  );
};

export default TodoForm;
