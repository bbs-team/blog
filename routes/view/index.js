const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/blog', (req, res) => {
    res.render('blog')
});

router.get('/blog/create',(req,res) => {
    res.render('add_blog')
});

module.exports = router;