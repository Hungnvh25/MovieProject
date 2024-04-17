const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const { name } = require('ejs');

const Country = sequelize.define('country',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    name:Sequelize.STRING

});

module.exports = Country;