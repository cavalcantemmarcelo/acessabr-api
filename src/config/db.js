const mongoose = require('mongoose')

const db = 'mongodb+srv://project:project@cluster0.j80byxt.mongodb.net/acessabr?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection