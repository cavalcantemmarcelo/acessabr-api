const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/profile', usersController.loginRequired, usersController.profile);
router.post('/logout', usersController.logout);

module.exports = router;
