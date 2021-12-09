const mongoose = require('mongoose');

const mongo_uri = "mongodb+srv://mms01:admin123@cluster0.aymhc.mongodb.net/appJO?retryWrites=true&w=majority";

mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function() {
    console.log('Connected to the database! ✅');
});