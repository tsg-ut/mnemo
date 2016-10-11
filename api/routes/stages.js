const express = require('express');
const router = express.Router();

const Stages = require('../models/stage');

router.get('/', (req, res) => {
	Stages.findAll().then((stages) => {
		res.json(stages);
	});
});

module.exports = router;
