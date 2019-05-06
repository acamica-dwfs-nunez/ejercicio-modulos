const randomString = require('./random')

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }
}

class Alumno extends Persona {
  constructor(nombre, apellido, edad, carrera, año) {
    super(nombre, apellido, edad)
    this.carrera = carrera
    this.año = año
    this.id = randomString(20)
  }
}

class ABM {
  constructor() {
    this.alumnos = {}
  }

  agregarAlumno(alumno) {
    this.alumnos[alumno.id] = alumno
  }

  buscarAlumno(busqueda) {
    const resultado = Object.keys(this.alumnos)
      .map(id => this.alumnos[id])
      .filter(alumno => {
        for (const prop in alumno) {
          if (alumno.hasOwnProperty(prop)) {
            const atributo = alumno[prop]
            let bool = atributo == busqueda || atributo.toString().includes(busqueda)
            return bool
          }
        }
      })

    return resultado
  }

  borrarAlumno(busqueda) {
    const  resultado = Object.keys(this.alumnos)
      .map(id => this.alumnos[id])
      .filter(alumno => {
        for (const prop in alumno) {
          if (alumno.hasOwnProperty(prop)) {
            const atributo = alumno[prop]
            let bool = atributo == busqueda || atributo.toString().includes(busqueda)
            return bool
          } 
        }
      })
      delete this.alumnos[resultado[0].id]
      // console.log(this.alumnos)      
    }
    

  //crear metodo para editar alumno
  editar(par, campo){
    par = campo
    console.log(par);
  }    
}


module.exports = { Alumno, ABM }
