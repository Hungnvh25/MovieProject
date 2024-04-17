const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ActorMovie = sequelize.define('actorMovie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

});

module.exports = ActorMovie;
