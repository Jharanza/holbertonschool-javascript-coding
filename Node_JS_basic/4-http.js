#!/usr/bin/env node
/**
 * Create a server
 */
const http = require('http');

const app = http.createServer((req, res) => {
  // Tell the browser everything is OK and the data is in plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write the message
  res.write('Hello Holberton School!');
  // Tell the server that all the response headers and body have been sent
  res.end();
}).listen(1245);

module.exports = app;
