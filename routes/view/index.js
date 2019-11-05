const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{
        user_id: req.cookies.user_id,
        err: req.body.err
    })
});


router.get('/create',(req,res) => {
    res.render('add_blog',{
        user_id: req.cookies.user_id,
        err: req.body.err
    });
});
router.get('/:id',(req,res) => {
    res.render('show_blog',{
        id: req.params.id,
        user_id: req.cookies.user_id,
        err: req.body.err
    });
});

module.exports = router;