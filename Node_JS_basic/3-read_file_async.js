const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Si hay un error al leer el archivo, rechaza la Promesa con un mensaje de error
        reject(new Error('Cannot load the database'));
        return;
      }

      // Divide el contenido del archivo en líneas
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Inicializa contadores para cada campo
      let totalStudents = 0;
      let csCount = 0;
      let sweCount = 0;

      // Inicializa arreglos para almacenar los nombres de estudiantes en cada campo
      const csList = [];
      const sweList = [];

      // Procesa las líneas y cuenta los estudiantes en cada campo
      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');

        // Verifica si el campo es 'CS' o 'SWE' y cuenta al estudiante en el campo correspondiente
        if (field === 'CS') {
          csCount += 1;
          csList.push(firstName.trim());
        } else if (field === 'SWE') {
          sweCount += 1;
          sweList.push(firstName.trim());
        }

        // Cuenta el estudiante global
        totalStudents += 1;
      });

      // Imprime los resultados
      console.log(`Number of students: ${totalStudents - 1}`);
      console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
      console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);

      // Resuelve la Promesa, indicando que la operación se completó
      resolve();
    });
  });
}

// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = countStudents;
