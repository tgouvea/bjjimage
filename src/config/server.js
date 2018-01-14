const port = 3003

const bodyParser = require('body-parser') //responsável pelo parser do corpo da requisição
const express = require('express') // Servidor que roda encima do node
const server = express() // Instancia o express
const allowCors = require('./cors') //Habilita a permissão de cors - Requisição vir de fonte diferente

server.use(bodyParser.urlencoded({ extend: true})) //Para permitir mais tipos de dados do que padrão
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND rodando na porta ${port}.`)
})

module.exports = server