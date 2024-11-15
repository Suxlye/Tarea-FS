
const fs = require('fs');

function generarArchivo() {
    const alumnos = [
        { idEstudiante: 1, nombreEstudiante: 'Elmer Garcia', edadEstudiante: 20 },
        { idEstudiante: 2, nombreEstudiante: 'Stacy Benitez', edadEstudiante: 19 },
        { idEstudiante: 3, nombreEstudiante: 'Stanley Amaya', edadEstudiante: 23 }
    ];

    fs.writeFileSync('alumnos.json', JSON.stringify(alumnos, null, 2));
    console.log('Archivo alumnos.json generado con datos iniciales.');
}

module.exports = generarArchivo;
