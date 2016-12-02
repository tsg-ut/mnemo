module.exports = {
	up: (queryInterface, Sequelize) => (
		queryInterface.addColumn('submissions', 'version', {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 1,
		})
	),

	down: (queryInterface) => (
		queryInterface.removeColumn('submissions', 'version')
	),
};
