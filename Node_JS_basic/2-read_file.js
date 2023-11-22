const fs = require('fs');

function countStudents(path) {
  try {
    // Lee el contenido del archivo de forma síncrona
    const data = fs.readFileSync(path, 'utf8');

    // Divide el contenido del archivo en líneas
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Inicializa contadores para cada campo
    let totalStudents = 0;
    let csCount = 0;
    let sweCount = 0;

    // Inicializa arreglos para almacenar los nombres de estudiantes en cada campo
    const csList = [];
    const sweList = [];

    // Procesa las líneas y cuenta los estudiantes en cada campo
    lines.forEach(line => {
      const [firstName, lastName, age, field] = line.split(',');

      // Verifica si el campo es 'CS' o 'SWE' y cuenta al estudiante en el campo correspondiente
      if (field === 'CS') {
        csCount++;
        csList.push(firstName.trim());
      } else if (field === 'SWE') {
        sweCount++;
        sweList.push(firstName.trim());
      }

      // Cuenta el estudiante global
      totalStudents++;
    });

    // Imprime los resultados
    console.log(`Number of students: ${totalStudents - 1}`);// without the header
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);

  } catch (error) {
    // Lanza un error si no se puede cargar la base de datos
    throw new Error('Cannot load the database');
  }
}

// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = countStudents;

