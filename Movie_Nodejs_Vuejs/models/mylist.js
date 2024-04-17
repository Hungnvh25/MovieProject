const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const { name } = require('ejs');

const Mylist = sequelize.define('mylist',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    name:Sequelize.STRING

});

module.exports = Mylist;
