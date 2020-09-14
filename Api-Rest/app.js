// Aca se encuentra la Funcionalidad de EXPRESS

'use strict'

//lee en la carpeta node_modules y lo importa
const express = require('express')  

// Se lee y se importa Express usa MiddleWare (capas que se van abriendo y al haber un peticion HTTP se va a esas distintas capas)
const bodyParser = require('body-parser') 

//Configuracion de la App
const hbs = require('express-handlebars')
const app = express() 
const cors = require('cors')
const api = require('./Rutas')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false })) //Propiedad MIDDLEWARE
app.use(bodyParser.json()) //Peticiones cuerpo de mensaje en formato .json

// Fontaneria, configurar el motor de plantilla en express
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api) //Se carguen las apis
app.get('/login', (req, res) => { //Se cargue la vista
    res.render('login')
})

app.get('/', (req, res) => {
    res.render('persona')
})

module.exports = app