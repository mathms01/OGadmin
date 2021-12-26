'use strict';

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    id:ObjectId,
    firstname: String,
    lastname: String,
    gender: String,
    country: String
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;