const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const file = process.argv[2];

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    if (process.argv.length > 2) {
      countStudents(file)
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
                .filter((student) => student[student.length - 1] === field)
                .map((element) => element[0]);
              msg.push(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
            }
          }
          res.end(`${msg.join('\n')}`);
        }).catch((error) => {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`Internal Server Error: ${error.message}`);
        });
    } else {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Can not find endpoint');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
