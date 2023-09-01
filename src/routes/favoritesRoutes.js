const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

router.get('/', favoritesController.index);
router.post('/', favoritesController.store);
router.delete('/:id', favoritesController.destroy);

module.exports = router;