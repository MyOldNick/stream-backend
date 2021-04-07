const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect('mongodb://localhost:27017/twich', {useNewUrlParser: true})

    const db = mongoose.connection

    db.on('error', err => {
        console.log(err)
    })
}

module.exports = connectToDB