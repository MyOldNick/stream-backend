const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.connect(`mongodb+srv://${dbConfig.HOST}:${dbConfig.PASSWORD}@cluster0.fmmbl.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, {useNewUrlParser: true})

    const db = mongoose.connection

    db.on('error', err => {
        console.log(err)
    })
}

module.exports = connectToDB

const dbConfig = {
    HOST: "mor_ozzy",
    DB: "parser",
    PASSWORD:'a4047946',
    PORT:'1337'
  };