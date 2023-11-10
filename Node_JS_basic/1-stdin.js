const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

console.log('Welcome to Holberton School, what is your name?');

rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
