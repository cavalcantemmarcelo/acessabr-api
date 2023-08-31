const  mongoose = require('mongoose');

const PlacesSchema = new mongoose.Schema({ 
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
        {
            item: Number, 
            status: Boolean
        }
    ],
    destack: Boolean
});

module.exports = mongoose.model('Places', PlacesSchema);