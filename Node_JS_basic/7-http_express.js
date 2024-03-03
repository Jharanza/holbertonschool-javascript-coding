#!/usr/bin/env node
const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', (req, res) => {
  if (fs.existsSync(process.argv[2])) {
    countStudents(process.argv[2])
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        const students = data;
        const msg = [];
        const fields = {};

        students.forEach((student) => {
          fields[student[student.length - 1]] = (fields[student[student.length - 1]] || 0) + 1;
        });

        msg.push('This is the list of our students');
        msg.push(`Number of students: ${students.length}`);

        for (const field in fields) {
          if (field) {
            const result = students
              .filter((stud) => stud[stud.length - 1] === 1)
              .map((element) => element[0]);
            msg.push(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
          }
        }
        res.send(`${msg.join('\n')}`);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.send(`Internal Server Error: ${err.message}`);
      });
  } else {
    res.send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`);
});

module.exports = app;
