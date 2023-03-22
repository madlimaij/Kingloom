import React, { useEffect, useState } from 'react';
import EditTodos from './EditTodos';

export type Todo = {
  todo_id?: number;
  description: string;
};

const ListTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = () => {
    fetch('http://localhost:5000/todos')
      .then((response) => response.json())
      .then((initialData) => setTodos(initialData))
      .catch((err) => console.log(err.message));
  };
  const deleteTodo = (id: number | undefined, todo: Todo) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        console.log(response.status);
        const newTodos = [...todos].filter(todo => todo.todo_id !== id)
        setTodos(newTodos)
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodos/>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id, todo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
