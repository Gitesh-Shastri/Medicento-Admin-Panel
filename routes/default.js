const express = require('express');
const router = express.Router();

const defaultController = require('../controllers/defaultControllers');

router.route('/')
        .get(defaultController.index);

router.route('/login')
        .get(defaultController.loginGet);        

module.exports = router;