const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'db_meteorology',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión DB:', err);
  } else {
    console.log('Conexión exitosa');
  }
});

module.exports = connection;