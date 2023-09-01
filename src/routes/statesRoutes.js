const express = require('express');
const router = express.Router();

const statesController = require('../controllers/statesController');

router.get('/', statesController.index);
router.post('/', statesController.store);
router.get('/:id', statesController.show);
router.put('/:id', statesController.update);
router.delete('/:id', statesController.destroy);

module.exports = router;