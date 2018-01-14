const restful = require('node-restful')
const mongoose = restful.mongoose

const fotoSchema = new mongoose.Schema({
    description: {type: String, require: true},
    url: {type: String, require: true},
    done: {type: Boolean, require: true, default: false},
    availableForSale: {type: Boolean, require: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Foto', fotoSchema)