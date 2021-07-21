const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config");
// const sendError = require('../errorSend');

const isValidJwt = (token) => {
	let secret = config.secret;
	return jwt.verify(token, secret, (err, decoded) => {
		if (err) {
			console.log(err);
			return false
		}
		return decoded;
	});
}

const verifyToken = (req, res, next) => {
	const token = req.headers["x-access-token"] || req.headers["authorization"] || req.headers["Authorization"];
	console.log(token);
	if (!token) {
		return res.status(401).send({ status: false });
		// sendError(res,401);
	}
	let decoded = isValidJwt(token);
	if (!decoded) {
		return res.status(401).send({ status: false });
		// sendError(res,401);
	}

	req.userId = decoded.id;
	next();
};

const authJwt = {
	verifyToken,
	isValidJwt,
};
module.exports = authJwt;
