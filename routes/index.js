module.exports = function(app) {
	require('./auth/auth.router')(app)
	require('./users/users.router')(app)
}