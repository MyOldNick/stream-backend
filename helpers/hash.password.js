const brypt = require('bcrypt')

module.exports = (pswd) => brypt.hash(pswd, 10)