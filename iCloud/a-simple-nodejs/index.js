'use strict';
const connect = require('connect');
const serveStatic = require('serve-static');

const app = connect();
app.use('/', serveStatic('.', {'index': ['index.html']}));
app.listen(8080);

console.log('My app is ready at http://localhost:8080');