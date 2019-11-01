const express = require('express');
var blog = require('./blog');
var user = require('./user');
const router = express.Router();

router.use('/blog', blog);
router.use('/user',user);

module.exports = router;