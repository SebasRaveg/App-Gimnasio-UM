'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Se crea el esquema de la persona
const PeronaSchema = Schema({
    Foto:String,
    Nombre: String,
    Apellido: String,
    Cedula: Number,
    Edad: Number,
    Correo: String,
    Carrera: String,
    Codigo: Number,
    Ciudad: String,
    Direccion: String,
    Barrio: String,
    Eps: String,
    Preexistencias_medicas: String,
    Tipo_de_usuario: {type: String, enum: ['Estudiante', 'Docente', 'Administrativo', 'Particular']},
})

//Para exportar el modelo se usa el metodo
module.exports = mongoose.model('Persona', PeronaSchema) //Desde el resto d el apalicacion sera accesible importandolo