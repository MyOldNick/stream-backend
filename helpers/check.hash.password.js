const bcrypt = require('bcrypt');

module.exports = async (password, hashedPassword) => {
        const isEqual = await bcrypt.compare(password, hashedPassword)

        if(!isEqual) {
            throw  new Error
        }
}