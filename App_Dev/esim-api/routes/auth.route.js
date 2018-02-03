var express = require('express');
var expressValidation = require('express-validation');
var validation = require('./../config/param-validation');
var authController = require('./../controllers/auth.controller');

const router = express.Router();

// router.get('/',(req,res)=>
//     res.send('Auth route has been triggered')
// );

router.route('/login')
.post(expressValidation(validation.login),authController.login);

router.route('/logout')
.post(authController.logout);

module.exports = router;