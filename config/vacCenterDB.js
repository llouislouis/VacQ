const mysql = require("mysql2");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234530579",
  database: "vaccenter",
});

module.exports = connection;