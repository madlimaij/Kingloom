import React from 'react';
import InputTodo from '../components/Todo/InputTodo';
import ListTodos from '../components/Todo/ListTodos';

const TodoPage = () => {
  return (
    <div className="container">
      <InputTodo />
      <ListTodos/>
    </div>
  );
};

export default TodoPage;
