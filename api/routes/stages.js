const assert = require('assert');
const Router = require('express-promise-router');
const router = Router();

const Stages = require('../models/stage');
const Submissions = require('../models/submission');
const slack = require('../utils/slack');

const {validateSubmission, calculateScore} = require('../../lib/validator');
const stageData = require('../../stages');

router.get('/', async (req, res) => {
	const stages = await Stages.findAll();
	res.json(stages);
});

router.get('/:stage', async (req, res) => {
	const stageName = req.params.stage;

	const stage = await Stages.findOne({
		where: {
			name: stageName,
		},
	});

	if (stage === null) {
		res.status(404).json({
			error: true,
			message: 'not found',
		});
	} else {
		res.json(stage);
	}
});

router.get('/:stage/submissions', async (req, res) => {
	const stageName = req.params.stage;

	const submissions = await Submissions.findAll({
		include: [{
			model: Stages,
			where: {
				name: stageName,
				migratedVersion: {
					$col: 'submissions.version',
				},
			},
		}],
		order: [
			['score', 'DESC'],
			['updatedAt', 'ASC'],
		],
		limit: 20,
	});

	const data = submissions.map((submission) => ({
		name: submission.name,
		score: submission.score,
		blocks: submission.blocks,
		clocks: submission.clocks,
	}));

	res.json(data);
});

router.post('/:stage/submissions', async (req, res) => {
	const stageName = req.params.stage;

	const [stage, existingSubmission] = await Promise.all([
		Stages.findOne({
			where: {
				name: stageName,
			},
		}),
		Submissions.findOne({
			where: {
				name: req.body.name,
			},
			include: [{
				model: Stages,
				where: {
					name: stageName,
				},
			}],
			order: [
				['score', 'DESC'],
			],
		}),
	]);

	const submissionData = req.body;

	if (stage === null) {
		res.status(404).json({
			error: true,
			message: 'stage not found',
		});
		return;
	}

	submissionData.stage = stageName;

	const {pass, message, blocks, clocks} = validateSubmission(submissionData);

	if (!pass) {
		res.status(400).json({
			error: true,
			message,
		});
		return;
	}

	const stageDatum = stageData.find((s) => s.name === stageName);

	const score = calculateScore({
		clocks,
		blocks,
		stage: stageDatum,
	});

	if (existingSubmission) {
		if (score <= existingSubmission.score && stageDatum.version <= existingSubmission.version) {
			res.status(400).json({
				error: true,
				message: 'user name existing',
			});
			return;
		}

		const [count] = await Submissions.update({
			name: req.body.name,
			board: JSON.stringify(req.body.board),
			score,
			blocks,
			clocks,
			version: stageDatum.version,
			stageId: stage.id,
		}, {
			where: {
				name: req.body.name,
				stageId: stage.id,
			},
		});

		assert.strictEqual(count, 1);

		const submission = await Submissions.findOne({
			where: {
				name: req.body.name,
				stageId: stage.id,
			},
		});

		res.json(submission);
	} else {
		// If no previous submission is existing
		const submission = await Submissions.create({
			name: req.body.name,
			board: JSON.stringify(req.body.board),
			score,
			blocks,
			clocks,
			version: stageDatum.version,
			stageId: stage.id,
		});

		res.json(submission);
	}

	// Slack notification

	const submissions = await Submissions.findAll({
		include: [{
			model: Stages,
			where: {
				name: stageName,
				migratedVersion: {
					$col: 'submissions.version',
				},
			},
		}],
		order: [
			['score', 'DESC'],
			['updatedAt', 'ASC'],
		],
	});

	const rank = submissions.findIndex((submission) => submission.name === req.body.name);

	slack.send({
		text: `*${req.body.name}* さんがステージ「${stageDatum.title}」を *${score}点* でクリアしました！`,
		attachments: submissions.map((submission, index) => (
			[index, submission]
		)).slice(rank - 1, rank + 2).map(([submissionRank, submission]) => (
			{
				text: `#${submissionRank + 1} ${submission.name}: ${submission.score}pts (${submission.blocks} blocks, ${submission.clocks} clocks)`,
				color: (submissionRank === rank) ? 'good' : null,
			}
		)),
	});
});

module.exports = router;
