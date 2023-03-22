const express = require('express');
const app = express(); // run my express library
const cors = require('cors');
const pool = require('./db');
//get library, use require()

//MIDDLEWARE - for this, we use app.use
app.use(cors()); // cors lets us run server and react app together?
//need to get data from client side, need request.body object
app.use(express.json()); // express.json() middleware is used to parse incoming JSON data and make it available in the req.body object for use by the route handler

//ROUTES
//create a todo
app.post('/todos', async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    ); // ($1) placeholder for description, adding dynamic data
    // added "returning", so we return data as response

    res.json(newTodo.rows[0]); //.rows[0] to only get the row we want as response
  } catch (error) {
    console.log(error.message);
  }
});

//get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get a todo
app.get('/todos/:id', async (req, res) => {
  //dynamic url
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE TODO_ID = $2',
      [description, id]
    );

    res.json('Todo was updated.');
  } catch (error) {
    console.log(error.message);
  }
});

//delete a todo

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id=$1', [
      id,
    ]);
    res.json('Todo was deleted.');
  } catch (error) {
    console.log(error.message);
  }
});

//For the server to start, listen to a port number
app.listen(5000, () => {
  console.log('server has started on port 5000');
});
