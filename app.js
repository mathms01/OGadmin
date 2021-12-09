const express = require('express')
const {MongoClient} = require('mongodb');

const app = express();
const port = 8000;

app.use(express.json());

// Ajouter les routes via les routers
const sportRouter = require('./src/routers/sport.router');
app.use('/api', sportRouter);

// Connexion à la base de données
require('./src/database/mongodb');

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port} 🚀`)
});
