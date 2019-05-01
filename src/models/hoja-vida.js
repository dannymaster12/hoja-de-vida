const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datosHojaVida = new Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: Number,
    
})