const express = require('express');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
	app.use(enforce.HTTPS({trustProtoHeader: true}));
	app.use((req, res, done) => {
		console.log(req.hostname);
		done();
	});
}

app.use('/', require('./routes/index'));
app.use('/stages', require('./routes/stages'));

app.listen(process.env.PORT || 3000);

module.exports = app;
