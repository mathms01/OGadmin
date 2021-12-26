const express = require('express');
const router = express.Router();

const AthleteController = require('../controllers/athlete.controller');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    athleteController.list(req, res);
});

router.get('/athletes/:id', (req, res) => {
    var athleteId = req.params.id;
    athleteController.getById(req, res, athleteId);
});

router.post('/athletes',function(req,res){
    var athleteFirstName = req.body.athleteFirstName;
    var athleteLastName = req.body.athleteLastName;
    var athleteGender = req.body.athleteGender;
    var athleteCountry = req.body.athleteCountry;
    athleteController.Add(req, res, athleteFirstName, athleteLastName, athleteGender, athleteCountry);
});

router.post('/athletes/:id',function(req,res){
    var id = req.params.id;
    var athleteFirstName = req.body.athleteFirstName;
    var athleteLastName = req.body.athleteLastName;
    var athleteGender = req.body.athleteGender;
    var athleteCountry = req.body.athleteCountry;
    athleteController.Modify(req, res, id, athleteFirstName, athleteLastName, athleteGender, athleteCountry);
});

router.delete('/athletes/:id',function(req,res){
    var id = req.params.id;
    athleteController.Delete(req, res, id);
});

// ... A COMPLETER ...

module.exports = router;