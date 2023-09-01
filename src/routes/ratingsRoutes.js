const express = require('express');
const router = express.Router();

const ratingsController = require('../controllers/ratingsController');

router.get('/', ratingsController.index);
router.post('/', ratingsController.store);
router.put('/:id', ratingsController.update);
router.delete('/:id', ratingsController.destroy);

module.exports = router;