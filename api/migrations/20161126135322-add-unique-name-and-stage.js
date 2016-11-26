module.exports = {
	up: (queryInterface) => (
		queryInterface.addIndex('submissions', ['name', 'stageId'], {
			indicesType: 'UNIQUE',
		})
	),

	down: (queryInterface) => (
		queryInterface.removeIndex('submissions', ['name', 'stageId'])
	),
};
