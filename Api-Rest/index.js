// Metodo connect se le pasa una string con una url donde esta la base de datos y atravs de un callback permite conectrase a la bd.
const mongoose = require('mongoose') 
const app = require('./app')
const config = require('./config')

//Conexion Base de Datos y Inicializacion Express
mongoose.connect (config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion con la base de datos establecida...')

    app.listen(config.port, () => { // => eso sustituye Function
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})