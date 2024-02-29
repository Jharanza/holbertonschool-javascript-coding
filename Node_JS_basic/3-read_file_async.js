#!/usr/bin/env node
/**
 * Read a database and print the data
 */

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        try {
          // Process the data
          const lines = data.trim().split('\n').slice(1);
          const countStudents = lines.length;
          const studentsByField = {};

          for (let i = 0; i < lines.length; i += 1) {
            const studentLine = lines[i];
            if (studentLine) {
              const studentData = studentLine.split(',');
              const firstName = studentData[0];
              const field = studentData[3];

              if (!studentsByField[field]) {
                studentsByField[field] = { count: 0, students: [] };
              }
              studentsByField[field].count += 1;
              studentsByField[field].students.push(firstName);
            }
          }

          console.log(`Number of students: ${countStudents}`);
          for (const field in studentsByField) {
            if (studentsByField[field]) {
              const { count, students } = studentsByField[field];
              console.log(`Number of students in ${field}: ${count} List: ${students.join(', ')}`);
            }
          }
          resolve(lines);
        } catch (error) {
          reject(new Error(`Error processing data: ${error}`));
        }
      }
    });
  });
}

module.exports = countStudents;
