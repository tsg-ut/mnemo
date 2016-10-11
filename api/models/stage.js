const Sequelize = require('sequelize');
const sequelize = require('./');

const Stage = sequelize.define('stages', {
	name: Sequelize.TEXT,
});

module.exports = Stage;
