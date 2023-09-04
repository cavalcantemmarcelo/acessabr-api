const Places = require('../models/placesModel');

module.exports = {

    async index(req, res) {
        
        const places = await Places.find();
        return res.json(places);

    },

    async store(req, res) {
        const { name, image, link, description, location, tags, category, city } = req.body;
        const place = await Places.create({
            name,
            image,
            link,
            description,
            location,
            tags,
            category,
            city
        }, { maxTimeMS: 20000 });
        return res.json(place);
    },

    async update(req, res) {
        const { name, image, link, description, location, tags, category, city } = req.body;

        const place = await Places.findByIdAndUpdate(req.params.id, {
            name,
            image,
            link,
            description,
            location,
            tags,
            category,
            city
        }, { new: true });  

        return res.json(place);
    },

    async destroy(req, res) {
        const place = await Places.findByIdAndRemove(req.params.id);

        if(!place) {
            return res.status(400).send({ error: 'Local não encontrado' });
        }
        
        return res.send();
    },

    async show(req, res) {
        const place = await Places.findById(req.params.id);
        return res.json(place);
    }

};