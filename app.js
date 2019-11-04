var express = require('express');
const bodyParser = require('body-parser');
var viewRouter = require('./routes/view');
var apiRouter = require('./routes/api');
var sequelize = require('./models');
var path = require('path');
const cookieParser = require('cookie-parser')

var app = express();

// sequelize(db) setting
sequelize.sequelize.sync();

// static file setting
app.use(express.static(path.join(__dirname, 'public')));

// json setting
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser);

//view engine 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// router setting
app.use('/', viewRouter);
app.use('/api', apiRouter);

module.exports = app;