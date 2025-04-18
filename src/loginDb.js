const mysql = require("mysql2/promise");

const loginDb = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "comma_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = loginDb;
