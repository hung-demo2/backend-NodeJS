const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
host :process.env.DB_HOST, // default localhost
port : process.env.DB_PORT, // default port mysql 3306 or '3306'
user : process.env.DB_USER, // default empty
password : process.env.DB_PASSWORD,
database : process.env.DB_NAME,
});

module.exports = connection;