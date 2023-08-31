const Cities = require('../models/citiesModel');

module.exports = {

    async index(req, res) {
        const cities = await Cities.find();
        return res.json(cities);
    },

    async store(req, res) {
        const { name, state } = req.body;
        const city = await Cities.create({
            name,
            state
        }, { maxTimeMS: 20000 });

        return res.json(city);
    },

    async update(req, res) {
        const { name, state } = req.body;

        const city = await Cities.findByIdAndUpdate(req.params.id, {
            name,
            state
        }, { new: true });  

        return res.json(city);
    },

    async destroy(req, res) {
        await Cities.findByIdAndRemove(req.params.id);

        if(!city) {
            return res.status(400).send({ error: 'Local não encontrado' });
        }
        
        return res.send();
    },

    async show(req, res) {
        const city = await Cities.findById(req.params.id);
        return res.json(city);
    }

};


