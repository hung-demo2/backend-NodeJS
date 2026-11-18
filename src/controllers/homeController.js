
const connection = require('../config/database');

const getHomePage = (req, res) => {
let users = [];

  connection.query(
  'select * from Users ',
   function(err, results, fields) {
    users = results;
    console.log( "<<<<<RESULTS HOMEPAGE>>>>>",results); // results contains rows returned by server
  res.send(JSON.stringify(users));
   }
);
 
}

const getAbc = (req, res) => {
  res.send('CHECK ABC');
}

const getEmail = (req, res)=> {
    res.render('sample.ejs');
}
module.exports = {
  getHomePage,
  getAbc,
  getEmail
}