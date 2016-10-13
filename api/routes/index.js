const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.redirect('http://sig.tsg.ne.jp/mnemo/');
});

module.exports = router;
