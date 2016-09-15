const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mnemo', '', '', {
	dialect: 'sqlite',
	storage: 'db.sqlite3',
});

const Submission = sequelize.define('submission', {
	userName: Sequelize.STRING,
	point: Sequelize.INTEGER,
});

router.get('/', (req, res) => {
	res.end('hoge');
});

module.exports = router;
