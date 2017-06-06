module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('stages', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		createdAt: {
			type: Sequelize.DATE,
		},
		updatedAt: {
			type: Sequelize.DATE,
		},
	}, {charset: 'utf8mb4'}).then(() => (
		queryInterface.createTable('submissions', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
			name: {
				type: Sequelize.STRING,
			},
			board: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			blocks: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			clocks: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			score: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			stageId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'stages',
					key: 'id',
				},
			},
		}, {charset: 'utf8mb4'})
	)),

	down: (queryInterface) => Promise.all([
		queryInterface.dropTable('submissions'),
		queryInterface.dropTable('stages'),
	]),
};
