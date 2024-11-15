// leerArchivo.js
const fs = require('fs');

function leerDatos() {
    if (fs.existsSync('alumnos.json')) {
        const contenido = fs.readFileSync('alumnos.json', 'utf8');
        const alumnos = JSON.parse(contenido);
        console.log('Lista de alumnos:', alumnos);
    } else {
        console.log('El archivo alumnos.json no existe.');
    }
}

module.exports = leerDatos;
