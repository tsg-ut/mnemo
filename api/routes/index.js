const express = require('express');
const router = express.Router();

const Stage = require('../models/stage');
const Submission = require('../models/submission');

router.get('/', (req, res) => {
	Submission.findById(1).then((submission) => {
		return submission.getStage();
	}).then((stage) => {
		res.end(stage.createdAt.toString());
	});
});

module.exports = router;
