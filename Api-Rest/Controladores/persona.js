'use strict'

const Persona = require('../Modelos/persona')

//Funcion para la Peticion GET: Devolver todos los Datos
function getPersonas(req, res){ 
    Persona.find({}, (err, persona) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}` })
        if (!persona) return res.status(404).send({message: 'No existen las personas'})

        res.send(200, {persona})
    })
}

//Funcion para la Peticion GET: Buscar Datos por su ID unico
function getPersona(req, res){ 
    let personaId = req.params.personaId

    Persona.findById(personaId, (err, persona) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}` })
        if (!persona) return res.status(404).send({message: `La persona no existe`})

        res.status(200).send({ persona}) 
    })
}

//Funcion para la Peticion POST: Almacenar Datos
function savePersona(req, res){ 
    console.log('POST /api/persona') 
    console.log(req.body)  // Se debe que acceder al cuerpo de la peticion, con Body-parser se puede acceder al cuerpo de la peticion, log para ver el cuerpo
    
    //Almacenar en la base de datos primer dato
    let persona = new Persona()
    persona.Tipo_de_usuario = req.body.Tipo_de_usuario
    persona.Tipo_de_Documento = req.body.Tipo_de_Documento
    persona.Numero_de_Documento = req.body.Numero_de_Documento
    persona.Nombres = req.body.Nombres
    persona.Apellidos = req.body.Apellidos
    persona.Edad = req.body.Edad
    persona.Correo = req.body.Correo
    persona.Departamento = req.body.Departamento
    persona.Ciudad = req.body.Ciudad
    persona.Barrio = req.body.Barrio
    persona.Direccion = req.body.Direccion
    persona.Carrera = req.body.Carrera
    persona.Otra_Carrera = req.body.Otra_Carrera
    persona.Codigo = req.body.Codigo
    persona.Eps = req.body.Eps
    persona.Pre_existencias_Medicas = req.body.Pre_existencias_Medicas
    persona.Foto_de_Usuario = req.body.Foto_de_Usuario

    persona.save((err, personaAlmacenada) => { // Funcion CallBack (error y almacena estara con un ID unico)
        if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
        res.status(200).send({persona: personaAlmacenada})
    }) 
}

//Funcion para la Peticion PUT: Actualizar Datos
function updatePersona(req, res){  
    let personaId = req.params.personaId
    let update = req.body // Actualizar todo el cuerpo
    
    Persona.findByIdAndUpdate(personaId, update, (err, personaUpdated) =>{
        if (err) res.status(500).send({message: `Error al actualizar la persona: ${err}`})

        res.status(200).send({persona: personaUpdated})
    })
}

//Funcion para la Peticion DELETE: Eliminar Datos
function deletePersona(req, res){ 
    let personaId = req.params.personaId

    Persona.findById(personaId, (err, persona) =>{
        if (err) res.status(500).send({message: `Error al borrar la persona: ${err}`})

        persona.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar la persona: ${err}`})
            res.status(200).send({message: 'La persona ha sido eliminada'})
        })
    })
}

module.exports = {
    getPersona,
    getPersonas,
    savePersona,
    updatePersona,
    deletePersona 
}