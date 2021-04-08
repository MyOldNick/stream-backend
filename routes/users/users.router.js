const { Router } = require('express')
const {userController} = require('../../controllers')

const router = Router()

router.post('/login', (req, res) => {
    res.json('login')
})

router.post('/register', userController.createUser)

router.post('/auth', userController.authUser)

router.post('/findUsers', userController.findUserByStreamKeys)

module.exports = router