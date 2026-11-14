
const getHomePage = (req, res) => {
  res.send('Hello World! & hello');
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