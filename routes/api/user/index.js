const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

router.post('/login',ctrl.login);
router.post('/',ctrl.join);

module.exports = router;