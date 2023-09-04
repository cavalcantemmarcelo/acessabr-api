const mongoose = require('mongoose');

const ContentsSchema = new mongoose.Schema({
    title: String,
    content: String,
    assets: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    status: Boolean
});

module.exports = mongoose.model('Contents', ContentsSchema);