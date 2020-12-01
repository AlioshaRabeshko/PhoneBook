const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/api/users', require('./routes/users'));

const PORT = 5000;

mongoose.connect(
	'mongodb://localhost:27017/users',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) return console.log(err);
		app.listen(PORT, () => {
			console.log(`Server is listening port ${PORT}.`);
		});
	}
);
