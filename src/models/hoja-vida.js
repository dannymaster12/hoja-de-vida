const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datosHojaVida = new Schema({
    programa: String,
    nombre: String,
    apellido: String,
    cedula: Number,
    direccion: String,
    telefono: Number,
    n_licencia: Number,
    n_libreta: Number,
    estado_civil: String,
    fecha_nacimiento: String,
    email: String,
    n_hijos: String

});

module.exports = mongoose.model('hojavida', datosHojaVida);