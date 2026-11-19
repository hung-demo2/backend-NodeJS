// ĐỊNH NGHĨA ROUTER WEB

const expess = require('express');
const router =expess.Router();
const {getHomePage,getAbc,getEmail,postCreateUser} = require('../controllers/homeController');

// khai báo router
// router.METHOD('/route', HANDLER)


router.get('/',getHomePage);

router.get('/abc', getAbc);

router.get('/email', getEmail);

router.post('/create-user', postCreateUser);


module.exports = router;