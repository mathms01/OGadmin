const Athlete = require('../models/athlete.model');

class AthleteController {
    /**
     * Lister tous les athletess
     */
    async list(req, res) {
        const athletes = await Athlete.find();

        res.json({
            count: athletes.length,
            athletes: athletes
        });
    }

    /**
     * Récupérer un athletes
     */
     async getById(req, res, id) {
        const athletes = await Athlete.findById(id);

        res.json({
            athletes: athletes
        });
    }

    /**
     * Ajouter un athletes
     */
     async Add(req, res, firstname, lastname, gender, country) {

        var athletes = new Athlete({firstname:firstname, lastname:lastname, gender:gender, country:country});

        await athletes.save(function (err, newAthlete) {
            if (err) return console.error(err);
            console.log(newAthlete.name + " saved to athletes collection.");
          })

        res.json({
            response: "Added new athletes! ✅"
        });
    }

    /**
     * Modifier un athletes
     */
     async Modify(req, res, id, firstname, lastname, gender, country) {
        
        const filter = { _id: id };
        const update = { firstname:firstname, lastname:lastname, gender:gender, country:country };

        Athlete.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully updated✅');
        });
    }

    /**
     * Supprimer un athletes
     */
     async Delete(req, res, id) {
        
        const filter = { _id: id };

        Athlete.findOneAndDelete(filter, {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully deleted ✅');
        });
    }

    // ... A COMPLETER ...
}

module.exports = AthleteController;