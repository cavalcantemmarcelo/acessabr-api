const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');

router.get('/', citiesController.index);
router.post('/', citiesController.store);
router.get('/:id', citiesController.show);
router.put('/:id', citiesController.update);
router.delete('/:id', citiesController.destroy);

module.exports = router;
