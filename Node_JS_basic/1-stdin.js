#!/usr/bin/env node
/**
 * Execute a program through the command line or a pipeline
 * @param {string} input data from the input
 */
process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('close', () => process.stdout.write('This important software is now closing\n'));
