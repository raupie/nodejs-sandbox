// Load the http module to create an http server.
var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<html><head><meta charset=\"utf-8\"/><title>Hello Node.js</title></head><body><h1>Hello World</h1></body></html>");
});

server.listen(8081);
