const express = require('express');
const router = express.Router();

const Submission = require('../models/submission');

router.get('/', (req, res) => {
	Submission.findById(1).then((submission) => (
		submission.getStage()
	)).then((stage) => {
		res.end(stage.createdAt.toString());
	});
});

module.exports = router;
