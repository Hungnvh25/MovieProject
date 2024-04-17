const Sequelize = require('sequelize');

const sequelize = new Sequelize('movie', 'movieProject', 'movieProject', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
