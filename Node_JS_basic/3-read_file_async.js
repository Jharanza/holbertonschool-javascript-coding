#!/usr/bin/env node
/**
 * Read a database and print the data
 */

const fs = require('fs');

async function countStudents(fileName) {
  try {
    if (!fs.existsSync(fileName)) {
      throw new Error('Cannot load the database');
    }

    const data = await fs.promises.readFile(fileName, 'utf-8');
    const students = data.split('\n').map((elem) => elem.split(','));
    students.pop();
    students.shift();

    const fields = {};
    for (const student of students) {
      const field = student[student.length - 1];
      fields[field] = (fields[field] || 0) + 1;
    }

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (field) {
        const filteredStudents = students.filter((student) => student[student.length - 1] === field);
        const firstNames = filteredStudents.map((student) => student[0]);
        console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
      }
    }

    return students; // Optional: return the processed students data
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
