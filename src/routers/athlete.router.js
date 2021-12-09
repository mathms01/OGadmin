const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/sports/', async (req, res) => {
    athleteController.list(req, res);
});

// ... A COMPLETER ...

module.exports = router;