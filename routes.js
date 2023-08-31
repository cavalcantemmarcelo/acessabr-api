const express = require('express'); 
const router = express.Router();
const PlacesController = require('./controllers/PlacesController');
const CitiesController = require('./controllers/CitiesController');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/places', PlacesController.index);
router.post('/places', PlacesController.store);
router.put('/places/:id', PlacesController.update);
router.delete('/places/:id', PlacesController.destroy);
router.get('/places/:id', PlacesController.show);

router.get('/cities', CitiesController.index);
router.post('/cities', CitiesController.store);
router.put('/cities/:id', CitiesController.update);
router.delete('/cities/:id', CitiesController.destroy);
router.get('/cities/:id', CitiesController.show);

module.exports = router;
