#!/usr/bin/env node
/**
 * Execute an program through the command line
 * @param {name} data from the input
 */
const os = require('os')
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question('Welcome to Holberton School, what is your name?' + os.EOL, (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing' + os.EOL);
  readLine.close();
});
