#!/usr/bin/env node
/**
 * Read a database and print the data
 */

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(new Error(`Cannot load the database: ${err.message}`));
      } else {
        const data = content.split('\n');
        const students = data.slice(1).filter((line) => line.trim()); // Remove empty lines

        const CS = [];
        let totalCS = 0;
        const SWE = [];
        let totalSWE = 0;

        students.forEach((student) => {
          const info = student.split(',');
          const field = info[3];
          if (field === 'CS') {
            CS.push(info[0]);
            totalCS += 1;
          } else if (field === 'SWE') {
            SWE.push(info[0]);
            totalSWE += 1;
          }
        });

        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${totalCS}. List: ${CS.join(', ')}`);
        console.log(`Number of students in SWE: ${totalSWE}. List: ${SWE.join(', ')}`);

        resolve();
      }
    });
  });
}

module.exports = countStudents;
