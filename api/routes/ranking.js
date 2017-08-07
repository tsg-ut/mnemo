const Router = require('express-promise-router');
const router = Router();

const Stages = require('../models/stage');
const Submissions = require('../models/submission');
const sequelize = require('../models');

router.get('/', async (req, res) => {
	const submissions = await Submissions.findAll({
		attributes: [
			'name',
			[sequelize.fn('sum', sequelize.col('score')), 'totalScore'],
		],
		include: [{
			model: Stages,
			where: {
				migratedVersion: {
					$col: 'submissions.version',
				},
			},
		}],
		group: ['submissions.name'],
		order: [
			[sequelize.fn('sum', sequelize.col('score')), 'DESC'],
		],
		limit: 20,
	});

	res.json(submissions.map((submission) => ({
		name: submission.name,
		score: submission.dataValues.totalScore,
	})));
});

module.exports = router;
