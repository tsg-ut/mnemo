const stages = require('../../lib/stages.json');
const Stages = require('../models/stage');

module.exports = {
	up: (queryInterface) => (
		queryInterface.bulkInsert('stages', stages.map((stage, index) => ({
			name: stage.name || `stage${index}`,
			width: stage.width,
			height: stage.height,
			createdAt: new Date(),
			updatedAt: new Date(),
		})), {}).then(() => (
			Stages.findOne({where: {name: 'wire01'}})
		)).then((stage) => (
			queryInterface.bulkInsert('submissions', [{
				name: 'hakatashi',
				board: JSON.stringify([{
					x: 0,
					y: 0,
					name: 'wireI',
					rotate: 0,
				}]),
				score: 100,
				stageId: stage.id,
				createdAt: new Date(),
				updatedAt: new Date(),
			}])
		))
	),

	down: (queryInterface) => (
		queryInterface.bulkDelete('submissions', null, {}).then(
			() => queryInterface.bulkDelete('stages', null, {})
		)
	),
};
