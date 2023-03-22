// connecting with the library

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'HkFVPwpfOGkCdS08SiCJ',
  host: 'localhost',
  port: 5432,
  database: 'kingloomtodo',
});

module.exports = pool;