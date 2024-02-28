#!/usr/bin/env node
/**
 * Reads a CSV file synchronously and displays information about students.
 *
 * @param {string} path The path to the CSV file.
 * @throws {Error} If there's an error reading the file or processing the data.
 */

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const content = fs.readFileSync(path, 'utf-8');
    // Split the lines into an array, omitting the header
    const data = content.split('\n').slice(1);

    // Ensure the file is not empty
    if (data.length === 0) throw new Error('The data is empty');

    // Initialize student lists and counts
    const CS = [];
    const SWE = [];
    let totalCS = 0;
    let totalSWE = 0;

    // Iterate through each student record
    data.forEach((line) => {
      const info = line.split(',');

      const field = info[3];
      const name = info[0];

      // Count students by field
      if (field === 'CS') {
        CS.push(name);
        totalCS += 1;
      } else if (field === 'SWE') {
        SWE.push(name);
        totalSWE += 1;
      }
    });

    // Display student information
    console.log(`Number of students: ${data.length}`);
    console.log(`Number of students in CS: ${totalCS}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${totalSWE}. List: ${SWE.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database: ', err);
  }
}

module.exports = countStudents;
