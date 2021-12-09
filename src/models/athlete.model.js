'use strict';

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
    id:ObjectId,
    firstname: String,
    lastname: String,
    gender: Gender,
    country: Country
});

const Gender = {
    Male: "Male",
    Female: "Female"
}

const Country = {
    FR:"fr",
    AU:"au",
    BR:"br",
    CN:"cn",
    MA:"ma",
    RU:"ru", 
    US:"us"
}

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;