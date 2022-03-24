const sequelize = require('sequelize');
const config = require('config');

//conexão com o banco
const instancia = new sequelize(
    config.get('mysql.banco-de-dados'),
    //'petShopBD', nome do banco
    config.get('mysql.usuario'),
    //'root', usuário
    config.get('mysql.senha'),
    //'123456', senha
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
);

module.exports = instancia;