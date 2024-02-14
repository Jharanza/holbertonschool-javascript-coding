#!/usr/bin/node
/**
 *  Read and print the content of a file
 * @fs call to the module fs (file system)
 * @fp get the file path
 */
const fs = require('fs');

if (process.argv.length < 3) {
  process.exit(1);
}

const fp = process.argv[2];

fs.readFile(fp, 'utf-8', (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
