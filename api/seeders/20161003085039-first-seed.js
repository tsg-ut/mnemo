const stages = require('../../lib/stages.json');

module.exports = {
	up: (queryInterface) => Promise.all([
		queryInterface.bulkInsert('stages', stages.map((stage, index) => ({
			name: stage.name || `stage${index}`,
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {}),
		queryInterface.bulkInsert('submissions', [{
			name: 'hakatashi',
			board: JSON.stringify([{
				x: 0,
				y: 0,
				name: 'wireI',
				rotate: 0,
			}]),
			score: 100,
			stageId: 1,
			createdAt: new Date(),
			updatedAt: new Date(),
		}]),
	]),

	down: (queryInterface) => (
		queryInterface.bulkDelete('submissions', null, {}).then(
			() => queryInterface.bulkDelete('stages', null, {})
		)
	),
};
