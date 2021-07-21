const config = require("../../config/auth.config");
const db = require("../../database/models");
const User = db.user;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const regist = (req, res) => {
	const datauser = new User({
		email: req.body.email,
		data: {
			username: req.body.email?.split("@")?.[0] || 'username',
		},
		password: bcrypt.hashSync(req.body.password, 8)
	});
	User.findOne({
		email: req.body.email
	})
		.exec((err, user, next) => {
			if (err) {
				next(err)
			}
			if (user) {
				return res.send({ message: "Пользователь уже зарегистрирован", status: false });
			}
			datauser.save((err) => {
				if (err) {
					console.log(err);
					next(err)
				}
				return res.send({ message: "Пользователь зарегистрирован", status: true });

			});
		});
}

const login = (req, res) => {
	User.findOne({
		email: req.body.email
	})
		.populate("group", "-__g")
		.exec((err, user,next) => {
			if (err) {
				next(err)
			}
			if (!user) {
				return res.send({ message: "Пользователь не найден", status: false, statusCode: "400" });
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				user.password
			);

			if (!passwordIsValid) {
				return res.send({
					accessToken: null,
					message: "Проверьте пароль",
					status: false,
					statusCode: "401",
				});
			}

			const token = jwt.sign({ id: user._id }, config.secret, {
				expiresIn: config.tokenLife // 24 часа
			});

			res.status(200).send({
				id: user._id,
				username: user.data.username,
				access_token: token,
				img: user.data.img,
			});
		});
};



// const refresh_token = (req, res)=>{
// 	const postData = req.body
//     // if refresh token exists
//     if((postData.refreshToken)) {

// 		const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife})
//         const response = {
//             "accsess_token": token,
//         }
//         // update the token in the list
//         res.status(200).json(response);        
//     } else {
//         res.status(404).send('Invalid request')
//     }
// }

module.exports = { login, regist };