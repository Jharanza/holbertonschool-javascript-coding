#!/usr/bin/node

const url = 'https://jsonplaceholder.typicode.com/todos';
const request = require('request');

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const data = JSON.parse(body);
  const completedTaskCount = {};

  data.forEach(task => {
    if (task.completed) {
      const userId = task.userId;

      if (completedTaskCount[userId]) {
        completedTaskCount[userId]++;
      } else {
        completedTaskCount[userId] = 1;
      }
    }
  });
  console.log(completedTaskCount);
});

