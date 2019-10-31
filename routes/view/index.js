const express = require('express');
var blog = require('./blog');
const router = express.Router();

router.use('/blog', blog);

module.exports = router;