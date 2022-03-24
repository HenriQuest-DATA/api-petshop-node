const roteador = require('express').Router();

roteador.use('/', (requisicao, resposta) => {
    resposta.send('OK');
    console.log('responde');
})

module.exports = roteador;