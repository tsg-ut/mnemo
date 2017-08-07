const Router = require('express-promise-router');
const router = Router();

const Stages = require('../models/stage');
const Submissions = require('../models/submission');

router.get('/', async (req, res) => {
	const submissions = await Submissions.findAll();
	res.json(submissions);
});

module.exports = router;
