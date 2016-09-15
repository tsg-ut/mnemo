const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.end('<h1>Hello, World!</h1>');
});

app.listen(3000);
