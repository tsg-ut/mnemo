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
				const board = JSON.stringify([{
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
				}]);

				return queryInterface.bulkInsert('submissions', [{
					name: 'kurgm',
					board,
					score: 9000,
					blocks: 3,
					clocks: 3,
					stageId: stage.id,
					createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
					updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
				}, {
					name: 'moratorium08',
					board,
					score: 10000,
					blocks: 3,
					clocks: 3,
					stageId: stage.id,
					createdAt: new Date(),
					updatedAt: new Date(),
				}, {
					name: 'Yosshi999',
					board,
					score: 9000,
					blocks: 3,
					clocks: 3,
					stageId: stage.id,
					createdAt: new Date(),
					updatedAt: new Date(),
				}, {
					name: 'hakatashi',
					board,
					score: 10000,
					blocks: 3,
					clocks: 3,
					stageId: stage.id,
					createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
					updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
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
