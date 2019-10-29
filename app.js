var express = require('express');
const bodyParser = require('body-parser');
var blogRouter = require('./routes/blog');
var sequelize = require('./models');

var app = express();

sequelize.sequelize.sync();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/blog',blogRouter);
app.get('/',(req,res) => {
    res.sendfile('./views/index.html')
});

module.exports = app;