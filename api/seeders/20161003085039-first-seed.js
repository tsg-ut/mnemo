const stages = require('../../stages');
const Stages = require('../models/stage');

module.exports = {
	up: (queryInterface) => (
		queryInterface.bulkInsert('stages', stages.map((stage, index) => ({
			name: stage.name || `stage${index}`,
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {}).then(() => (
			Stages.findOne({where: {name: 'wire01'}})
		)).then((stage) => {
			if (process.env.NODE_ENV !== 'production') {
				return queryInterface.bulkInsert('submissions', [{
					name: 'hakatashi',
					board: JSON.stringify([{
						x: 1,
						y: 0,
						name: 'wireI',
						rotate: 0,
					}, {
						x: 1,
						y: 1,
						name: 'wireI',
						rotate: 0,
					}, {
						x: 1,
						y: 2,
						name: 'wireI',
						rotate: 0,
					}]),
					score: 10000,
					blocks: 3,
					clocks: 3,
					stageId: stage.id,
					createdAt: new Date(),
					updatedAt: new Date(),
				}]);
			}

			return Promise.resolve();
		})
	),

	down: (queryInterface) => (
		queryInterface.bulkDelete('submissions', null, {}).then(
			() => queryInterface.bulkDelete('stages', null, {})
		)
	),
};
