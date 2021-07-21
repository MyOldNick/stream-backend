const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

const connectToDB = () => {
    mongoose.connect(`mongodb+srv://${dbConfig.HOST}:${dbConfig.PASSWORD}@cluster0.fmmbl.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, {useNewUrlParser: true})

    const db = mongoose.connection

    db.on('error', err => {
        console.log(err)
    })
}

module.exports = connectToDB;