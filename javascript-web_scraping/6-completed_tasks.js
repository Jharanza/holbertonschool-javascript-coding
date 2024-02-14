#!/usr/bin/node
/**
 * Show the completed tasks
 * @request module request
 * @toDos data from the body transform in an object
 * @completedTask object with the tasks completed
 */
const request = require('request');

const uri = process.argv[2];

request(uri, (err, res, body) => {
  if (err) console.log(err);

  else if (res.statusCode !== 200) console.log(res.statusCode);

  else {
    const toDos = JSON.parse(body);

    const completedTask = toDos.reduce((result, toDos) => {
      if (toDos.completed) result[toDos.userId] = (result[toDos.userId] || 0) + 1;

      return result;
    }, {});

    console.log(completedTask);
  }
});
