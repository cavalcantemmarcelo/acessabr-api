const express = require('express'); 
const router = express.Router();
const PlacesController = require('./controllers/PlacesController');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/places', PlacesController.index);
router.post('/places', PlacesController.store);
router.put('/places/:id', PlacesController.update);
router.delete('/places/:id', PlacesController.destroy);

module.exports = router;
