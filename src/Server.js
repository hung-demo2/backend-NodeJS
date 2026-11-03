const express = require('express'); // common js
const path = require('path'); // common js
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;
// console.log('port', process.env.PORT);
const hostName = process.env.HOST_NAME;
// console.log('hostName', process.env.HOST_NAME);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.render('sample.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})