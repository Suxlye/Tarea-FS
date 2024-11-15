
const fs = require('fs');

function modificarAlumno(idAlumno, nuevoNombre, nuevaEdad) {
    if (fs.existsSync('alumnos.json')) {
        const contenido = fs.readFileSync('alumnos.json', 'utf8');
        let alumnos = JSON.parse(contenido);
        
        let alumno = alumnos.find(a => a.idEstudiante === idAlumno);
        
        if (alumno) {
            alumno.nombreEstudiante = nuevoNombre;
            alumno.edadEstudiante = nuevaEdad;
            fs.writeFileSync('alumnos.json', JSON.stringify(alumnos, null, 2));
            console.log('Alumno actualizado correctamente.');
        } else {
            console.log('Alumno no encontrado.');
        }
    } else {
        console.log('El archivo alumnos.json no existe.');
    }
}

module.exports = modificarAlumno;
