'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')
const Schema = mongoose.Schema

// Se crea el esquema del usuario
const UsuarioSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    displayName: String,
    avatar: String, 
    password: {type: String, select: false},
    signupDate: {type: Date, default: Date.now()},
    lastLogin: Date
})

// Funciones que se pueden ejecutar antes o despues de que se almacene en la BD
// Se usa antes para que la contraseña sea encriptada
UsuarioSchema.pre('save', (next) => {
    let usuario = this
    // if (!usuario.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(usuario.password, salt, null, (err, hash) => {
            if (err) return next(err)

            usuario.password = hash
            next()
        })
    })
})

// Se genera el avatar
UsuarioSchema.methods.gravatar = function() {
    if(!this.email) return `https://gravatar.com/avatar/?s=200&d=retro`

    const md5 =  crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('Usuario', UsuarioSchema)