const Favorites = require('../models/favoritesModel');

module.exports = {
    index: (req, res) => {
        Favorites.find({}, (err, Favorites) => {
            if (err) {
                res.send(err);
            }
            res.json(Favorites);
        });
    },

    store: async (req, res) => {
        const { user, place } = req.body;
    
        try {
            const favorite = new Favorites({ user, place });
            await favorite.save();
    
            return res.json({ status: true, message: 'Favorite saved successfully' });
        } catch (error) {
            console.error('Error saving favorite:', error);
            return res.status(500).json({ status: false, message: 'Error saving favorite' });
        }
    },

    destroy: (req, res) => {
        Favorites.remove({ _id: req.params.id }, (err, Favorites) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        });
    },

    find: (req, res) => {
        Favorites.find({ user: userId })
            .populate('place') 
            .exec()
            .then(userFavorites => {
                res.json(userFavorites);
            }).catch(error => {
               res.send(error);
            });
    }

};

