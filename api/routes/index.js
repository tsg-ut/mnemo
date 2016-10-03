const express = require('express');
const router = express.Router();

const Stage = require('../models/stage');

router.get('/', (req, res) => {
	Stage.count().then((stages) => {
		res.end(`There are ${stages} stages in DB.`);
	});
});

module.exports = router;
