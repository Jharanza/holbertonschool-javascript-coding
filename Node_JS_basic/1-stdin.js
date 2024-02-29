#!/usr/bin/env node
/**
 * Execute an program through the command line
 * @param {name} data from the input
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
