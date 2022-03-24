const sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunas = {
    empresa: {
        type: sequelize.STRING,
        allowNull = false
    },
    email: {
        type: sequelize.STRING,
        allowNull = false
    },
    categoria: {
        type: sequelize.ENUM('ração', 'brinquedos'),
        allowNull = false
    },
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true, //para adicionar junto com as datas
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'version'
}

module.exports = instancia.define('fornecedor', colunas, opcoes);