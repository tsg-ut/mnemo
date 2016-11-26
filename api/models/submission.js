const Sequelize = require('sequelize');
const sequelize = require('./');

const Stage = require('./stage');

const Submission = sequelize.define('submissions', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 100],
		},
	},
	board: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	blocks: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 0,
		},
	},
	clocks: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 0,
		},
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

Submission.belongsTo(Stage);

module.exports = Submission;
