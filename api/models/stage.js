const Sequelize = require('sequelize');
const sequelize = require('./');

const Stage = sequelize.define('stages', {
	name: Sequelize.TEXT,
	width: Sequelize.INTEGER,
	height: Sequelize.INTEGER,
});

module.exports = Stage;
