const http = require('http');

const onRequest = (request, response) => {
  response.writeHead(200, { 'Content-type': 'plain/text' });
  response.write('Hello World');
  response.end();
};

http.createServer(onRequest).listen(8888);

console.log('Server has started');
