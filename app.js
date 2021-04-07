const express = require('express')
const cors = require('cors')
const nms = require('./media-server');

const {userRouter} = require('./routes')

const connectToDB = require('./database')

const app = express()

connectToDB()
nms.run()

app.use(cors())
app.use(express.json())

app.use('/', userRouter)

app.listen(5000, () => {
    console.log('Сервер недотвича запущен')
})