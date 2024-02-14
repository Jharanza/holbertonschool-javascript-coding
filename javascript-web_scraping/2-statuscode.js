#!/usr/bin/node
/**
 * Display the status code from a get request
 * @request module request
 * @fp file path
 */
const request = require('request');

if (process.argv.length < 3) process.exit(1);

const fp = process.argv[2];

request({
  method: 'GET',
  uri: fp
}, (err, res) => {
  if (err) console.log(err);
  else console.log(`code: ${res.statusCode}`);
});
