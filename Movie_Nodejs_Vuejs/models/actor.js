const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const { name } = require('ejs');

const Actor = sequelize.define('actor',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    name:Sequelize.STRING

});

module.exports = Actor;