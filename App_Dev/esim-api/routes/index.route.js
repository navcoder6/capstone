var express = require('express');

var authRoutes = require('./auth.route');
var userRoutes = require('./user.route');
var adminRoutes = require('./admin.route');

const router = express.Router();

router.get('/',(req,res)=>
    res.send('Your API is ready to use')
);

router.use('/auth',authRoutes);

router.use('/user',userRoutes);

router.use('/admin',adminRoutes);

module.exports = router;