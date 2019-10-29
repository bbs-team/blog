var app = require('../app');
var http = require('http');

http.createServer(app).listen(8000, () => console.log('running'));