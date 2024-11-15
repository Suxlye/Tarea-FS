
const fs = require('fs');

function agregarAlumno(nuevoNombre, nuevaEdad) {
    if (fs.existsSync('alumnos.json')) {
        const contenido = fs.readFileSync('alumnos.json', 'utf8');
        const alumnos = JSON.parse(contenido);
        
        const nuevoAlumno = {
            idEstudiante: alumnos.length + 1, // Nuevo ID
            nombreEstudiante: nuevoNombre,
            edadEstudiante: nuevaEdad
        };

        alumnos.push(nuevoAlumno);
        fs.writeFileSync('alumnos.json', JSON.stringify(alumnos, null, 2));
        console.log('Alumno agregado correctamente.');
    } else {
        console.log('El archivo alumnos.json no existe.');
    }
}

module.exports = agregarAlumno;
