const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement :true,
        allowNull:false,
        primaryKey:true
    },
    userName:Sequelize.STRING,
    passWord:Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.STRING 

});

module.exports = User;