#!/usr/bin/env node
/**
 * Execute a program through the command line or a pipeline
 * @param {string} input data from the input
 */
const readline = require('readline');

const isTesting = process.env.NODE_ENV === 'test';

const { isTTY } = process.stdin;

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

if (isTTY) {
  rl.question('Welcome to Holberton School, what is your name?\n', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close();
  });
} else {
  rl.write('Welcome to Holberton School, what is your name?\n');
  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
  });
  if (isTesting) {
    input = 'John';
  }
  rl.write(`Your name is: ${input.trim()}`);
}
rl.on('close', () => console.log('This important software is now closing'));
