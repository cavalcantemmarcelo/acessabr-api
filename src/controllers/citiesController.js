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
        try {
            const city = await Cities.findByIdAndRemove(req.params.id);

            if (!city) {
                return res.status(400).send({ error: 'Cidade não encontrada' });
            }

            return res.send();
        }   
        catch (error) {
            console.error('Erro ao deletar cidade:', error);
            return res.status(500).json({ status: false, message: 'Erro ao deletar a cidade.' });
        }
    },

    async show(req, res) {
        const city = await Cities.findById(req.params.id);
        return res.json(city);
    }

};


