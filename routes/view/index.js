const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/blog', (req, res) => {
    res.render('blog');
});

router.get('/blog/create',(req,res) => {
    res.render('add_blog',{
        user_id: req.cookies.user_id,
        err: req.body.err
    });
});
router.get('/blog/:id',(req,res) => {
    res.render('show_blog',{
        id: req.params.id,
        user_id: req.cookies.user_id,
        err: req.body.err
    });
});

module.exports = router;