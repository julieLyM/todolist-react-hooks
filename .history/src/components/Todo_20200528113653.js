import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const Todo = ({ todo }) => {
  return (
    <div>
      {' '}
      style={{ display: 'flex' }}
      <input type="checkbox" />
      <li style={{
          color:findRenderedComponentWithType,
          
      }}>{todo.task}</li>
      <button>X</button>
    </div>
  );
};

export default Todo;
