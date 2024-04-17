const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MylistMovie = sequelize.define('mylistMovie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
});

module.exports = MylistMovie;
