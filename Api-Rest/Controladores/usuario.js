'use strict'

const Usuario = require('../Modelos/usuario')
const servicio = require('../Servicios')

//Registro y autenticacion de usuarios
function signUp(req, res) {
    const usuario = new Usuario({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    usuario.save((err) => {
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})

        return res.status(200).send({token: servicio.createToken(usuario)})
    })
}

function signIn(req, res) {
    Usuario.find({email: req.body.email}, (err, usuario) => {
        if (err) return res.status(500).send({message: err})
        if (!usuario) return res.status(404).send({message: 'No existe el usuario'})

        req.usuario = usuario
        res.status(200).send({
            message: 'Te has logueado correctamente', 
            token: servicio.createToken(usuario)
        })
    })
}

module.exports = {
    signUp,
    signIn
}