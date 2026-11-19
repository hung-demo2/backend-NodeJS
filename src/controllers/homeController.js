
const connection = require('../config/database');

const getHomePage = (req, res) => {

return res.render('home.ejs');
 
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