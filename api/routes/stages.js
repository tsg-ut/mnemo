const express = require('express');
const router = express.Router();

const Stages = require('../models/stage');
const Submissions = require('../models/submission');

router.get('/', (req, res) => {
	Stages.findAll().then((stages) => {
		res.json(stages);
	});
});

router.get('/:stage', (req, res) => {
	const stageName = req.params.stage;

	Stages.findOne({
		where: {
			name: stageName,
		},
	}).then((stage) => {
		if (stage === null) {
			res.status(404).json({
				error: true,
				message: 'not found',
			});
		} else {
			res.json(stage);
		}
	});
});

router.get('/:stage/submissions', (req, res) => {
	const stageName = req.params.stage;

	Submissions.findAll({
		include: [{
			model: Stages,
			where: {name: stageName},
		}],
		order: 'score DESC',
		limit: 10,
	}).then((submissions) => {
		res.json(submissions);
	});
});

module.exports = router;
