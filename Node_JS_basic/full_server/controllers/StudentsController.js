import { readDatabase } from "../utils";

const filePath = process.argv[2]

class StudentsController {
    static async getAllStudents(req, res) {
        try {

            const data = await readDatabase(filePath)

            if (!filePath) {
                return res.status(500).send('DATABASE_FILEPATH environment variable not set');
            }

            let output = 'This is the list of our students\n'
            for (const [field, { count, list }] of Object.entries(data)) {
                output += `${field}: ${count}. List: ${list.join(', ')}\n`;
            }

            return res.status(200).send(output)
        } catch (err) {
            console.error(err);
            return res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        try {
            if (!filePath) {
                return res.status(500).send('DATABASE_FILEPATH environment variable not set')
            }

            const { major } = req.params;
            if (major !== 'CS' && major !== 'SWE') {
                return res.status(500).send('Major parameter must be CS or SWE')
            }

            const data = await readDatabase(filePath);
            const students = data[major] || [];

            let output = `List: ${students.join(', ')}`;
            return res.status(200).send(output)
        } catch (err) {
            console.error(err);
            return res.status(500).send('Major parameter must be CS or SWE');
        }
    }
}

module.exports = StudentsController