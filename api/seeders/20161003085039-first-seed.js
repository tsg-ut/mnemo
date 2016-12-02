const stages = require('../../stages');

module.exports = {
	up: (queryInterface) => (
		queryInterface.bulkInsert('stages', stages.map((stage, index) => ({
			name: stage.name || `stage${index}`,
			version: stage.version,
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {})
	),

	down: (queryInterface) => (
		queryInterface.bulkDelete('submissions', null, {}).then(
			() => queryInterface.bulkDelete('stages', null, {})
		)
	),
};
