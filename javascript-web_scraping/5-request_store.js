#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  
  fs.writeFile(filePath, body, 'utf-8', (err) => {
	 console.log(body);
    console.error(err);
  });
});
