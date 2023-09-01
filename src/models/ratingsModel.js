const mongoose = require('mongoose');

const RatingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Places'
    },
    rating: Number
});

module.exports = mongoose.model('Ratings', RatingsSchema);