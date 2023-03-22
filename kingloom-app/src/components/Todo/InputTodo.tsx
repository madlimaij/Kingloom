import React, { FormEvent, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Todo } from './ListTodos';

/* const useStyles = createUseStyles({
  title: {
    textAlign: "center",
    marginTop: 30,
  }
}); */

const InputTodo = () => {
  // const classes = useStyles();
  const [description, setDescription] = useState('');

  const addTodo = (todo: Todo) => {
        fetch('http://localhost:5000/todos ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    })
      .then((data) => {
        console.log(data);
        setDescription("")
      })
      .catch((err) => console.log(err.message));
  }

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = { description };
    addTodo(newTodo)
  };

  return (
    <>
      <h1 className="header">Todo list</h1>
      <form className="inputForm" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="inputTodo"
          placeholder='This also is in progress...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
};

export default InputTodo;
