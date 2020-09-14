// Aca se encuentran las rutas de peticiones

'use strict'

const express = require('express')  
const personaCtrl = require('../Controladores/persona')
const usuarioCtrl = require('../Controladores/usuario')
const auth = require('../MiddleWares/auth')
const api = express.Router()

/* ---------------- PETICIONES ------------------ */

//Devolver todos los Datos
api.get('/persona', auth, personaCtrl.getPersonas)
 
//Buscar Datos por su ID unico
api.get('/persona/:personaId', personaCtrl.getPersona)

//Almacenar Datos
api.post('/persona', auth, personaCtrl.savePersona) 
api.post('/signup', usuarioCtrl.signUp)
api.post('/signin', usuarioCtrl.signIn)

//Actualizar Datos
api.put('/persona/:personaId', auth,  personaCtrl.updatePersona)

//Eliminar Datos
api.delete('/persona/:personaId', auth, personaCtrl.deletePersona)  

//Autenticacion Middleware
api.get('/private', auth, (req, res) => {
    res.status(200).send({message: 'Tienes Acceso'})
})

module.exports = api