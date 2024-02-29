#!/usr/bin/env node
/**
 * Reads a CSV file synchronously and displays information about students.
 */
const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath);

    const lines = data.toString().trim().split('\n');

    const studentCount = lines.length - 1;
    const studentsByField = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];

      if (line) {
        const studentData = line.split(',');

        const firstName = studentData[0];
        const field = studentData[3];

        if (!studentsByField[field]) {
          studentsByField[field] = { count: 0, students: [] };
        }
        studentsByField[field].count += 1;
        studentsByField[field].students.push(firstName);
      }
    }

    console.log(`Number of students: ${studentCount}`);

    for (const field in studentsByField) {
      if (field in studentsByField) {
        const { count, students } = studentsByField[field];
        console.log(`Number of students in ${field}: ${count} List: ${students.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
