const express = require('express')
const Datastore = require('nedb')
const requestIp = require('request-ip')
const app = express();

app.set('trust proxy', true);

app.listen(3000, () => console.log('Listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));

const database = new Datastore('database.db');
database.loadDatabase();
