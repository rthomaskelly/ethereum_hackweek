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

app.post('/contractAddressSubmit', (request, response) => {
  console.log("Logging body...");
  console.log(request.body);

  console.log("ip " + request.ip);

  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  data.ip = request.ip;

  database.insert(data);
  response.json({
    status: 'success',
    timestamp: timestamp,
  });
});
