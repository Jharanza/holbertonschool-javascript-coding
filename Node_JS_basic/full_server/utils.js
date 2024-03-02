const fs = require('fs').promises;

function readDatabase(filePath) {
    return fs.readFile(filePath, 'utf-8')
        .then((data) => {
            const students = data.split('\n').map((line) => line.split(','));
            const studentsByField = students.reduce((acc, student) => {
                const field = student[0];
                acc[field] = acc[field] || [];
                acc[field].push(student[1]);
                return acc
            }, {});
            return Object.fromEntries(
                Object.entries(studentsByField).map(([field, names]) => [
                    field,
                    { count: names.length, list: names.sort() }
                ])
            )
        })
        .catch(err => Promise.reject(err));
}

module.exports = readDatabase