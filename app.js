const express = require('express')
const {MongoClient} = require('mongodb');

const app = express();
const port = 8000;

const uri = "mongodb+srv://mms01:admin123@cluster0.aymhc.mongodb.net/appJO?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const sports = [{id:1, name: "football"},{id:2, name:"rugby"}]

app.get('/', (req, res) => {
  res.send("TEST OK")
});

app.get('/sports', (req, res) => {
  res.send(sports)
});

app.get('/sports/:id', (req, res) => {
    var sportId = req.params.id;
    var sportFinded = sports.find(element => element.id = sportId);
  res.send(sportFinded)
});

app.post('/sports',function(req,res){
        var sportId = sports.length;
        /*while (sports.id.includes(sportId)) {
            sportId = sportId+1;
        }*/
        var sportName = "tennis";//req.body.sportName;
        sports.push(sportId, sportName);
        res.end("Sport successfully added !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

//main().catch(console.error);

async function main() {
	// we'll add code here soon
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
