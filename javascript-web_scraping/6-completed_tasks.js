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

    const output = JSON.stringify(completedTask, null, 2);
    console.log(output);
  }
});
