const Contents = require('../models/contentsModel');

module.exports = {

    async index(req, res) {
        const contents = await Contents.find();
        return res.json(contents);
    },

    async store(req, res) {
        const { title, content, assets, status } = req.body;
        const contents = await Contents.create({
            title,
            content,
            assets,
            status
        }, { maxTimeMS: 20000 });

        return res.json(contents);
    },

    async update(req, res) {
        const { title, content, assets, status } = req.body;

        const contents = await Contents.findByIdAndUpdate(req.params.id, {
            title,
            content,
            assets,
            status
        }, { new: true });  

        return res.json(contents);
    },

    async destroy(req, res) {
        await Contents.findByIdAndRemove(req.params.id);

        if(!contents) {
            return res.status(400).send({ error: 'Conteúdo não encontrado' });
        }
        
        return res.send();
    }

};
