const express = require('express');
const router = express.Router();
const contentsController = require('../controllers/contentsController');

router.get('/', contentsController.index);
router.post('/', contentsController.store);
router.put('/:id', contentsController.update);
router.delete('/:id', contentsController.destroy);

module.exports = router;