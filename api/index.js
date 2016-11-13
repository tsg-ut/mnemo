const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', require('./routes/index'));
app.use('/stages', require('./routes/stages'));

app.listen(process.env.PORT || 3000);

module.exports = app;
