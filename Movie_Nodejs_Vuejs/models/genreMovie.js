const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const GenreMovie = sequelize.define('genreMovie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }

});

module.exports = GenreMovie;
