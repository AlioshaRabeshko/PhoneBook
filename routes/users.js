const express = require('express');
const router = express.Router();
const Users = require('../models/userModel');

router.get('/', (req, res) => {
	Users.find()
		.sort({ firstName: 1 })
		.exec((err, users) => {
			if (err) return res.status(400).send();
			res.status(200).json(users);
		});
});

router.post('/', (req, res) => {
	const user = new Users(req.body);
	user.save();
	return res.status(201).json(user);
});

router.delete('/:id', (req, res) => {
	Users.deleteOne({ _id: req.params.id }, (err) => {
		if (err) return res.status(400).send();
		Users.find()
			.sort({ firstName: 1 })
			.exec((err, users) => {
				if (err) return res.status(400).send();
				res.status(200).json(users);
			});
	});
});

module.exports = router;
