var app = require('../app');
var http = require('http');

const mode = process.env.NODE_ENV || 'development';
const port = mode === 'production' ? 8080 : 3000;

http.createServer(app).listen(port, () => {
  console.log(`Server Running : http://0.0.0.0:${port}`);
  console.log();
});