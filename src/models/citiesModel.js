const mongoose = require('mongoose');

const CitiesSchema = new mongoose.Schema({
    name: String,
    state: String,
});

module.exports = mongoose.model('Cities', CitiesSchema);

