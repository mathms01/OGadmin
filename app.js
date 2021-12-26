const express = require('express')
const {MongoClient} = require('mongodb');
const path = require("path");
const pug = require("pug");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'))

app.set('view engine', 'hbs');
// on indique que nos vues se trouverons toujours dans le dossier views 
app.set('views', path.join(__dirname, '/src/views'));


// Ajouter les routes via les routers
const sportRouter = require('./src/routers/sport.router');
app.use('/api', sportRouter);

const athleteRouter = require('./src/routers/athlete.router');
app.use('/api', athleteRouter);

// Connexion à la base de données
require('./src/database/mongodb');

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port} 🚀`)
});
