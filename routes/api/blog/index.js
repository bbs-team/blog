const express = require('express');
const router = express.Router();
const ctrl = require('./blog.ctrl');

router.get('/',ctrl.list);
router.post('/create',ctrl.create);
router.put('/',ctrl.update);
router.delete('/',ctrl.remove);

module.exports = router;