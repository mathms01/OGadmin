'use strict';

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    id:ObjectId,
    name: String,
    category: String,
    athletes: []

    // ... A COMPLETER ...
    // Exemple :
    // athletes : [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]
});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;