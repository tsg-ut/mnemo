const Sequelize = require('sequelize');
const sequelize = require('./');

const Stage = require('./stage');

const Submission = sequelize.define('submissions', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	board: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	score: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 0,
		},
	},
	stageId: {
		type: Sequelize.INTEGER,
		references: {
			model: Stage,
			key: 'id',
		},
	},
});

module.exports = Submission;
