const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Movie = sequelize.define('movie',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    name:Sequelize.STRING,
    title:Sequelize.STRING,
    image:Sequelize.STRING,
    video:Sequelize.STRING,
    views:Sequelize.INTEGER,
    likes:Sequelize.INTEGER,
    descciption:Sequelize.STRING,
    year:Sequelize.DATE

});

module.exports = Movie;