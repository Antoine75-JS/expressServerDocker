const express = require('express');
const router = express.Router();

// Controllers
const { pingServer } = require('../controllers/pingController')

// Routes
router.get('/ping', pingServer);

module.exports = router;
