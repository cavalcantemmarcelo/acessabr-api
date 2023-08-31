const Places = require('../models/PlacesData');

module.exports = {

    async index(req, res) {
        
        const places = await Places.find();
        return res.json(places);
        
    },

    async store(req, res) {
        const { name, image, link, description, location, tags, category } = req.body;
        const place = await Places.create({
            name,
            image,
            link,
            description,
            location,
            tags,
            category
        }, { maxTimeMS: 20000 });
        return res.json(place);
    },

    async update(req, res) {
        const { name, image, link, description, location, tags, category } = req.body;

        const place = await Places.findByIdAndUpdate(req.params.id, {
            name,
            image,
            link,
            description,
            location,
            tags,
            category
        }, { new: true });  

        return res.json(place);
    },

    async destroy(req, res) {
        await Places.findByIdAndRemove(req.params.id);

        if(!place) {
            return res.status(400).send({ error: 'Local não encontrado' });
        }
        
        return res.send();
    }   
};