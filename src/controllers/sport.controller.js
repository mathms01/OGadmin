const Sport = require('../models/sport.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();

        res.json({
            count: sports.length,
            sports: sports
        });
    }

    listForView(req, res) {
        const sports = Sport.find();

        return sports;
    }

    /**
     * Récupérer un sport
     */
     async getById(req, res, id) {
        const sport = await Sport.findById(id);

        res.json({
            sport: sport
        });
    }

    /**
     * Ajouter un sport
     */
     async Add(req, res, name, category, athletes) {

        var sport = new Sport({name:name, category:category, athletes:athletes});

        await sport.save(function (err, newSport) {
            if (err) return console.error(err);
            console.log(newSport.name + " saved to sports collection.");
          })

        res.json({
            response: "Added new sport! ✅"
        });
    }

    /**
     * Modifier un sport
     */
     async Modify(req, res, id, name, category, athletes) {
        
        const filter = { _id: id };
        const update = { name: name, category:category, athletes:athletes };

        Sport.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully updated✅');
        });
    }

    /**
     * Supprimer un sport
     */
     async Delete(req, res, id) {
        
        const filter = { _id: id };

        Sport.findOneAndDelete(filter, {upsert: true}, function(err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully deleted ✅');
        });
    }
    // ... A COMPLETER ...
}

module.exports = SportController;