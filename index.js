const SistemaAbm = require('./abm')

const x = new SistemaAbm.ABM()

const y = new SistemaAbm.Alumno('Elver', 'Galarga', 69, 'sexología', 2)
const z = new SistemaAbm.Alumno('Rosa', 'Meltrozo', 69, 'sexología', 2)

x.agregarAlumno(y)
x.agregarAlumno(z)
// console.log(x.alumnos)
x.borrarAlumno('Rosa')
console.log(x)

// console.log(x.alumnos)
const resultado = x.buscarAlumno('Elver')[0]
x.editar(resultado.id, { edad: 43, direccion: 'calle falsa 123' })
console.log(x)
// console.log(x.alumnos);
