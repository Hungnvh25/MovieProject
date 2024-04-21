const path = require('path');

const express = require('express');

const adminController = require('../controllers/pages');

const router = express.Router();


router.get('/', adminController.getLoginPage);


module.exports = router;

