'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Se crea el esquema de la persona
const PeronaSchema = Schema({
    Tipo_de_Usuario: {type: String, enum: ['Estudiante', 'Docente', 'Administrativo', 'Egresado', 'Particular']},
    Tipo_de_Documento: {type: String, enum: ['Cedula de Ciudadania', 'Tarjeta de Identidad', 'Carnet de Extranjeria', 'Pasaporte', 'Registro Civil']},
    Numero_de_Documento: Number,
    Nombres: String,
    Apellidos: String,
    Edad: Number,
    Correo: String,
    Departamento: String,
    Ciudad: String,
    Barrio: String,
    Direccion: Number,
    Carrera: {type: String, enum: ['Contaduria Publica', 'Mercadeo Nacional e Internacional', 'Administracion de Empresas', 'Ingenieria de Sistemas y Telecomunicaciones', 'Ingenieria Logistica', 'Ingenieria en Analitica de Datos', 'Ingenieria en Seguridad de la Informacion', 'Psicologia', 'Comunicacion Social y Periodismo', 'Derecho', 'Medicina', 'Otra']},
    Otra_Carrera: String,
    Codigo: Number,
    EPS: String,
    Pre_existencias_Medicas: String,
    Foto_de_Usuario:String,
})

//Para exportar el modelo se usa el metodo
module.exports = mongoose.model('Persona', PeronaSchema) //Desde el resto d el apalicacion sera accesible importandolo