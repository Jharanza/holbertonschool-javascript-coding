#!/usr/bin/env node
/**
 * Reads a CSV file synchronously and displays information about students.
 */
const fs = require('fs');

function countStudents(fileName) {
  if (fs.existsSync(fileName)) {
    const data = fs.readFileSync(fileName, 'utf-8');
    let students = data.split('\n').map((elem) => elem.split(','));
    students = students.slice(1, students.length - 1);
    const fields = {};
    students.forEach((student) => {
      fields[student[student.length - 1]] = (fields[student[student.length - 1]] || 0) + 1;
    });

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (field) {
        const result = students
          .filter((stud) => stud[stud.length - 1] === field)
          .map((element) => element[0]);
        console.log(`Number of students in ${field}: ${result.length}. List: ${result.join(', ')}`);
      }
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
