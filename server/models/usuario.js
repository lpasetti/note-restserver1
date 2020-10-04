const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    emeail: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    img: {
        type: String,
        required: false
    }, // no es obligatoria
    role: {
        default: 'USER_ROLE'
    }, // default: 'USER_ROLE'
    estado: {
        type: Boolean,
        default: [true, 'Estado obligatorio']
    }, // Boolean
    google: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema);