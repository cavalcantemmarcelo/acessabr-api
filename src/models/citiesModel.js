const mongoose = require('mongoose');

const CitiesSchema = new mongoose.Schema({
    name: String,
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'States'
    }
});

module.exports = mongoose.model('Cities', CitiesSchema);

