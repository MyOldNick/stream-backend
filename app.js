const express = require('express')
const cors = require('cors')
const nms = require('./media-server/media-server');

const useRouter = require('./routes')

const connectToDB = require('./database')

const PORT  = 5000;

const app = express()

connectToDB()
nms.run()

app.use(cors())
app.use(express.json())

useRouter(app);

app.get('/ping',(req, res)=>res.status(200).send({ping:'pong'}));

app.listen(PORT, () => {
    console.log('Сервер недотвича запущен на ' + PORT);
})