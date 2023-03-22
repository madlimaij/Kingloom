CREATE DATABASE kingloomtodo;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY, /* unique key, seriali fn - increases primary key, so it's unique 1, 2, 3.... */
    description VARCHAR(255)
);