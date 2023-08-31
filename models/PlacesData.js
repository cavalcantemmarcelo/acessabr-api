const  mongoose = require('mongoose');

const PlacesDataSchema = new mongoose.Schema({ 
    name: String,
    image: String,
    link: String,
    description: String,
    location: String,
    category: String,
    tags: [String],
    location: {
        lat: Number,
        long: Number
    },
    facilities: [
        {item: Number, status: Boolean}
    ],
});

module.exports = mongoose.model('PlacesData', PlacesDataSchema);