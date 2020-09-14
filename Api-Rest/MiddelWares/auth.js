'use strict'

const servicios = require('../Servicios')

// Funcion para comprobar si existe la autenticacion
function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'No tienes autorizacion'})
    }

    const token = req.headers.authorization.split(" ")[1]

    servicios.decodeToken(token)
    .then(response => {
        req.usuario = response
        next()
    })
    .catch(response => {
        res.status(response.status)
    })
}

module.exports = isAuth