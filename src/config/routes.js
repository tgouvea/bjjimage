const express = require('express')

module.exports = function(server){

    //Rotas da API
    const router = express.Router()
    server.use('/api', router)

    // Rotas da api de foto
    const fotoService = require('../api/foto/fotoService')
    fotoService.register(router, '/fotos')


}