const express = require('express'); // common js
const path = require('path'); // common js
require('dotenv').config();
const configViewEngine = require('./config/viewEgine');
const app = express();
const webRouter = require('./routes/web');
const mysql = require('mysql2');

const port = process.env.PORT || 8888;
// console.log('port', process.env.PORT);
const hostName = process.env.HOST_NAME;
// console.log('hostName', process.env.HOST_NAME);


// config template engine
configViewEngine(app);

// khai báo router
// chú ý về tiền tố để có thể truy cập đúng đường dẫn 
app.use('/', webRouter);

// Test connect database
const connection = mysql.createConnection({
host :'localhost',
port : 3307, // default port mysql 3306
user : 'root', // default empty
password : '123456',
database : 'hoidanit',
});

connection.query(
  'select * from Users ',
   function(err, results, fields) {
    console.log( "<<<<<RESULTS>>>>>",results); // results contains rows returned by server
    console.log( "<<<<<FIELDS>>>>>",fields); // fields contains extra meta data about results, if available
   }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})