module.exports = {
	up: (queryInterface, Sequelize) => (
		Promise.all([
			queryInterface.addColumn('stages', 'migratedVersion', {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 1,
			}),
			queryInterface.addColumn('submissions', 'version', {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 1,
			}),
		])
	),

	down: (queryInterface) => (
		Promise.all([
			queryInterface.removeColumn('stages', 'migratedVersion'),
			queryInterface.removeColumn('submissions', 'version'),
		])
	),
};
