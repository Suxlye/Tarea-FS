
const fs = require('fs');

function contarAlumnos() {
    if (fs.existsSync('alumnos.json')) {
        const contenido = fs.readFileSync('alumnos.json', 'utf8');
        const alumnos = JSON.parse(contenido);
        console.log(`Número de alumnos: ${alumnos.length}`);
    } else {
        console.log('El archivo alumnos.json no existe.');
    }
}

module.exports = contarAlumnos;
