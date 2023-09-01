const mongoose = require('mongoose');

const ContentsSchema = new mongoose.Schema({
    title: String,
    content: String,
    assets: [String],
    createdAt: Date,
    updatedAt: Date,
    status: Boolean
});

module.exports = mongoose.model('Contents', ContentsSchema);
    