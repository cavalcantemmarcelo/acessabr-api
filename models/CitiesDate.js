const mongoose = require('mongoose');

const CitiesDateSchema = new mongoose.Schema({
    name: String,
    state: String,
});

module.exports = mongoose.model('CitiesDate', CitiesDateSchema);

