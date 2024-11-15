const readline = require('readline');
const generarArchivo = require('./crearArchivo');
const leerDatos = require('./leerArchivo');
const agregarAlumno = require('./agregarEstudiante');
const modificarAlumno = require('./actualizarEstudiante');
const eliminarAlumno = require('./eliminarEstudiante');
const contarAlumnos = require('./contarEstudiantes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarOpciones() {
    console.log('\nSeleccione una opción:');
    console.log('1 - Crear archivo JSON con alumnos');
    console.log('2 - Leer archivo JSON de alumnos');
    console.log('3 - Agregar nuevo alumno');
    console.log('4 - Modificar información de alumno');
    console.log('5 - Eliminar alumno');
    console.log('6 - Contar alumnos');
    console.log('7 - Salir');
}

function procesarSeleccion(opcion) {
    switch(opcion) {
        case '1':
            generarArchivo();
            break;
        case '2':
            leerDatos();
            break;
        case '3':
            rl.question('Nombre del nuevo alumno: ', (nombre) => {
                rl.question('Edad del nuevo alumno: ', (edad) => {
                    agregarAlumno(nombre, parseInt(edad));
                    mostrarOpciones();
                });
            });
            return;
        case '4':
            rl.question('ID del alumno a modificar: ', (id) => {
                rl.question('Nuevo nombre: ', (nombre) => {
                    rl.question('Nueva edad: ', (edad) => {
                        modificarAlumno(parseInt(id), nombre, parseInt(edad));
                        mostrarOpciones();
                    });
                });
            });
            return; 
        case '5':
            rl.question('ID del alumno a eliminar: ', (id) => {
                eliminarAlumno(parseInt(id));
                mostrarOpciones();
            });
            return; 
        case '6':
            contarAlumnos();
            break;
        case '7':
            console.log('¡Hasta luego!');
            rl.close();
            return;
        default:
            console.log('Opción no válida. Intente nuevamente.');
    }
    mostrarOpciones();
}

rl.on('line', (input) => {
    procesarSeleccion(input);
});

mostrarOpciones();
