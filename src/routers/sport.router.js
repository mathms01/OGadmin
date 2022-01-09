const express = require('express');
const router = express.Router();

var ObjectId = require('mongodb').ObjectId;

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

//Views
router.get('/view/sports/', function(req, res) {
    const sports = sportController.listForView();
      
    res.render('sports', {sports});
});

router.get('/sports/', async (req, res) => {
    sportController.list(req, res);
});
  
router.get('/sports/:id', (req, res) => {
    var sportId = req.params.id;
    sportController.getById(req, res, sportId);
});

router.post('/sports',function(req,res){
    var sportName = req.body.sportName;
    var sportCategory = req.body.sportCategory;
    var sportAthletes = req.body.sportAthletes;
    sportController.Add(req, res, sportName, sportCategory, sportAthletes);
});

router.post('/sports/:id',function(req,res){
    var id = req.params.id;
    var sportName = req.body.sportName;
    var sportCategory = req.body.sportCategory;
    var sportAthletes = req.body.sportAthletes;
    sportController.Modify(req, res, id, sportName, sportCategory, sportAthletes);
});

router.delete('/sports/:id',function(req,res){
    var id = req.params.id;
    sportController.Delete(req, res, id);
});
// ... A COMPLETER ...

module.exports = router;