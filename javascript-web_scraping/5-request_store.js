#!/usr/bin/node
/**
 * Get the content of a file and store it in a file
 * @request module request
 * @fs module fs
 * @uri url of the API
 * @fp file path where we write the content of the API
 */
const request = require('request');
const fs = require('fs');

const uri = process.argv[2];
const fp = process.argv[3];

request(uri, (err, res, body) => {
  if (err) console.log(err);

  else if (res.statusCode !== 200) console.log(res.statusCode);

  else {
    fs.writeFile(fp, body, 'utf-8', (err) => {
      if (err) console.log(err);
    });
  }
});
