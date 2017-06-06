const Sequelize = require('sequelize');
const sequelize = require('./');

const Stage = sequelize.define('stages', {
	name: Sequelize.TEXT,
	migratedVersion: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1,
		validate: {
			min: 1,
		},
	},
});

module.exports = Stage;
