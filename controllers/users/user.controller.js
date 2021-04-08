const  { userService } = require('../../services')

const { hashPassword, createStreamKey, checkPassword } = require('../../helpers')

module.exports = {
    createUser: async (req, res) => {

        const newUser = req.body

        newUser.stream_key = await createStreamKey()

        newUser.password = await hashPassword(newUser.password)

        const result = await userService.createUser(newUser)

        if(result) res.json(result)
        else res.json('Error')
    },

    authUser: async (req, res) => {

        const { email, password } = req.body

        const user = await userService.findUserByEmail(email)

        console.log(user)

        if(user) {

            await checkPassword(password, user.password)

            res.json({email: user.email, login: user.login, id: user._id, stream_key: user.stream_key})

        } else res.json('Error')

    }
}