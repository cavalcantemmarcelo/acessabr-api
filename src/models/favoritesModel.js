const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Places'
    }
});

module.exports = mongoose.model('Favorites', FavoritesSchema);