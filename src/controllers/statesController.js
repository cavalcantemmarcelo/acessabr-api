const States = require('../models/statesModel');

module.exports = {

    async index(req, res) {
        try {
            const states = await States.find();
            return res.json(states);
        }
        catch (error) {
            console.error('Error fetching states:', error);
            return res.status(500).json({ status: false, message: 'Error fetching states' });
        }
    },
    
    async store(req, res) {
        try {
            const { name, abbreviation } = req.body;
            const newState = await States.create({
                name,
                abbreviation,
            });
    
            return res.json(newState);
        } catch (error) {
            console.error('Error creating state:', error);
            return res.status(500).json({ status: false, message: 'Error creating state' });
        }
    },
   
    async update(req, res) {
        try {
            const { name, abbreviation } = req.body;

            const states = await States.findByIdAndUpdate(req.params.id, {
                name,
                abbreviation,
            }, { new: true });

            return res.json(states);
        }
        catch (error) {
            console.error('Error updating states:', error);
            return res.status(500).json({ status: false, message: 'Error updating states' });
        }

    },  

    async destroy(req, res) {
        try {
            const state = await States.findByIdAndRemove(req.params.id);
    
            if (!state) {
                return res.status(400).send({ error: 'Estado não encontrado' });
            }
    
            return res.send();
        }
        catch (error) {
            console.error('Error deleting state:', error);
            return res.status(500).json({ status: false, message: 'Error deleting state' });
        }
    },    

    async show(req, res) {
        try {
            const states = await States.findById(req.params.id);
            return res.json(states);
        }
        catch (error) {
            console.error('Error fetching states:', error);
            return res.status(500).json({ status: false, message: 'Error fetching states' });
        }
    }

};
