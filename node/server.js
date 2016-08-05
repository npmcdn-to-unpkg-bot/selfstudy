const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'plain/text' });
  response.write('Hello World');
  response.end();
}).listen(8888);
