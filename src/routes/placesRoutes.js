const express = require('express');
const router = express.Router();
const placesController = require('../controllers/placesController');

router.get('/', placesController.index);
router.post('/', placesController.store);
router.get('/:id', placesController.show);
router.put('/:id', placesController.update);
router.delete('/:id', placesController.destroy);

module.exports = router;
