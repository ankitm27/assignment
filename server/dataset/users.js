//modules
var mysql = require('mysql');
//create connection with mysql server
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'login'
});

//exports connection variable
module.exports = connection;
