#!/usr/bin/node
/**
 *
 */
const request = require('request');

const uri = process.argv[2];

request(uri, (err, res, body) => {
  if (err) console.log(err);

  else if (res.statusCode !== 200) console.log(res.statusCode);

  else {
    const toDos = JSON.parse(body);

    const completedTask = {};

    toDos.forEach((toDo) => {
      if (toDo.completed) {
        const userId = toDo.userId;
        if (completedTask[userId]) completedTask[userId]++;
        else completedTask[userId] = 1;
      }
    });

    // for (const userId in completedTask) console.log(`${userId}: ${completedTask[userId]}`);
    const output = JSON.stringify(completedTask);
    console.log(output);
  }
});
