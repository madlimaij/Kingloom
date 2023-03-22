# Notes

## PERN
Postgres + Express + React + Node freecodecamp tutorial: https://www.youtube.com/watch?v=ldYcgPKEZC8

## Log
See app diagram on video
### Necessary installs
### Server setup - libraries
npm init
npm i express pg cors
express - quickly create a server on Node js
pg - connects db with server
cors - allowes different domain apps to run together

## create index.js file
#### run libraries
#### middleware

### create Postgres DB and table

CREATE DATABASE name;
CREATE TABLE todo;
define a schema;

commands:
\l - all databases;
\c 'db-name'- connect to a database
\dt - all the tables

use psql shell:
CREATE DATABASE kingloomtodo;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
check with commands from above;

*SERIAL PRIMARY KEY -> primary key, increments

### Connect db to server
New file "db.js" to configure how we connect to the db;
("pg" library, pool)

### Build routes with postgres queries
Routes: create todo, get all todos, get a todo etc;
Using the new connection (in "pool" variable, to our db, imported to index.js from db.js file as module), 

(* explain in more detail how the connection to the db happens here)

### Build routes with Postgres queries
Building the routes (e.g. app.post("path", async(req, res)=>{getting data from request, sending to the table in the db; setting response}))

Use Postman and psql shell to check requests/database.

## Run server
cmd: nodemon index