const mongoose = require('mongoose');

const StatesSchema = new mongoose.Schema({
    name: String,
    abbreviation: String
});

module.exports = mongoose.model('States', StatesSchema);