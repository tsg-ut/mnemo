const express = require('express');
const bodyParser = require('body-parser');
const forceDomain = require('forcedomain');
const routemap = require('express-routemap');
const cors = require('cors');

const app = express();

app.use(cors({
	origin: ['https://mnemo.pro', /^https?:\/\/localhost(:\d+)?$/],
	optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	app.use(forceDomain({
		hostname: 'api.mnemo.pro',
		protocol: 'https',
	}));
}

app.use('/', require('./routes/index'));
app.use('/stages', require('./routes/stages'));

app.listen(process.env.PORT || 3000);
routemap(app);

module.exports = app;
