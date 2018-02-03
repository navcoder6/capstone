var express = require('express');
var expressValidation = require('express-validation');

var validation = require('./../config/param-validation');
var adminController = require('./../controllers/admin.controller');


const router = express.Router();

router.route('/login')
.post(expressValidation(validation.adminLogin),adminController.login);

router.route('/addService')
.post(expressValidation(validation.addService),adminController.addService);

// More admin routes can be added here for future

module.exports = router;