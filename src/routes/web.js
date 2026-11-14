// ĐỊNH NGHĨA ROUTER WEB

const expess = require('express');
const router =expess.Router();



// khai báo router
router.get('/', (req, res) => {
  res.send('Hello World! & hello')
})

router.get('/abc', (req, res) => {
  res.render('sample.ejs');
})

module.exports = router;