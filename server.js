//Node.js Stuff

const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

//We need to pass a listner, So a function which essentially  is executed whenever a new request arrrives.
const server = http.createServer(app);

server.listen(port); //to start the server and (port) name is used to listen the port number.

console.log('server running at port:3000')