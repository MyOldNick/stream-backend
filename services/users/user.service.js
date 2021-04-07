const userModel = require('../../database/models/user.model')

module.exports = {
    createUser: (user) => {
           return new userModel(user).save()
    },

    findUserByEmail: (email) => {
        return userModel.findOne({email: email})
    },

    findUserStreamKey: (key) => {
        return userModel.findOne({stream_key: key})
    }
}