const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

const porta = config.get('api.porta');

app.use(bodyParser.json()); //é o que faz a api poder usar json

const roteador = require('./rotas/fornecedores/index.js');
app.use('/api/fornecedores', roteador);

app.listen(porta, () => {
    console.log(`Servidor funcionando na porta ${porta}`);
})