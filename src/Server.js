const express = require('express'); // common js
const path = require('path'); // common js
require('dotenv').config();
const configViewEngine = require('./config/viewEgine');
const app = express();
const webRouter = require('./routes/web');


const port = process.env.PORT || 8888;
// console.log('port', process.env.PORT);
const hostName = process.env.HOST_NAME;
// console.log('hostName', process.env.HOST_NAME);


// config template engine
configViewEngine(app);

// khai báo router
// chú ý về tiền tố để có thể truy cập đúng đường dẫn 
app.use('/', webRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})