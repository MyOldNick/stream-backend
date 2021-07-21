const mongoose = require("mongoose");
const uuid = require('uuid');

const validateEmail = function (email) {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email)
};

const User = mongoose.model(
	"User",
	new mongoose.Schema({
		email: {
			type: String, required: "Email нужнен для регистрации",
			trim: true,
			unique: true,
			validate: [validateEmail, 'Введите правильный email'],
			match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Введите правильный email']
		},
		online: { type: Boolean, default: false },
		password: { type: String, required: "Пароль нужен для регистрации", trim: true, minlength: 3 },
		username: {
			type: String,
			default:`username#${uuid.v4().slice(0,6)}`
		},
		data: {
			first_name: { type: String, trim: true, minlength: 0, maxlength: 15, default: 'first_name' },
			last_name: { type: String, trim: true, minlength: 0, maxlength: 28, default: 'last_name' },
			dataCreated: { type: Date, default: Date.now },
			birthday: { type: Date },
			phone: {
				type: String,
				default: '0682281337',
				unique: true,
			},
			
		},

		stream_key: { 
			type : String,
			default: uuid.v4()
		},

	})
);

module.exports = User;