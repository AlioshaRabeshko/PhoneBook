const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
	firstName: { type: String, required: true },
	secondName: { type: String, required: true },
	phone: { type: String, required: true },
	gender: { type: Boolean, default: false },
	age: { type: Number, required: true },
	date: { type: Date, default: Date.now },
});
const Users = mongoose.model('User', usersSchema);

module.exports = Users;
