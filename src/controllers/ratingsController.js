const Ratings = require('../models/ratingsModel');

module.exports = {
    async index(req, res) {
        try {
            const ratings = await Ratings.find();
            return res.json(ratings);
        } catch (error) {
            console.error('Error fetching ratings:', error);
            return res.status(500).json({ status: false, message: 'Error fetching ratings' });
        }
    },

    async store(req, res) {
        try {
            const { user, place, rating } = req.body;
            const ratings = await Ratings.create({
                user,
                place,
                rating
            }, { maxTimeMS: 20000 });

            return res.json(ratings);
        } catch (error) {
            console.error('Error saving ratings:', error);
            return res.status(500).json({ status: false, message: 'Error saving ratings' });
        }
    },

    async update(req, res) {
        try {
            const { user, place, rating } = req.body;

            const ratings = await Ratings.findByIdAndUpdate(req.params.id, {
                user,
                place,
                rating
            }, { new: true });

            return res.json(ratings);
        } catch (error) {
            console.error('Error updating ratings:', error);
            return res.status(500).json({ status: false, message: 'Error updating ratings' });
        }
    },

    async destroy(req, res) {
        try {
            await Ratings.findByIdAndRemove(req.params.id);

            if (!ratings) {
                return res.status(400).send({ error: 'Avaliação não encontrada' });
            }

            return res.send();
        } catch (error) {
            console.error('Error deleting ratings:', error);
            return res.status(500).json({ status: false, message: 'Error deleting ratings' });
        }
    }

};