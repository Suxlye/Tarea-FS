
const fs = require('fs');

function eliminarAlumno(idAlumno) {
    if (fs.existsSync('alumnos.json')) {
        const contenido = fs.readFileSync('alumnos.json', 'utf8');
        let alumnos = JSON.parse(contenido);
        
        const indice = alumnos.findIndex(a => a.idEstudiante === idAlumno);
        
        if (indice !== -1) {
            alumnos.splice(indice, 1);
            fs.writeFileSync('alumnos.json', JSON.stringify(alumnos, null, 2));
            console.log('Alumno eliminado correctamente.');
        } else {
            console.log('Alumno no encontrado.');
        }
    } else {
        console.log('El archivo alumnos.json no existe.');
    }
}

module.exports = eliminarAlumno;
