const express = require('express')
const Datastore = require('nedb')
const requestIp = require('request-ip')
const smartContracts = require('./ethereum/contract.js')
const app = express();

app.set('trust proxy', true);

app.listen(3000, () => console.log('Listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

let message;

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index', {
    data: { message: message}
  });
});

app.post('/contractAddressSubmit', async (request, response) => {
  console.log("Logging body...");
  console.log(request.body);
  console.log("ip " + request.ip);

  insertRequestIntoDatabase(request);

  const contractAddress = request.body.contractAddress;
  if (contractAddress) {
    const contract = smartContracts.createContract('0x' + contractAddress)

    message = await contract.methods.message().call();
    console.log(`Read message '${message}'`);

    response.json({status: 'Success', redirect: '/'});
  }
});

function insertRequestIntoDatabase(request) {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  data.ip = request.ip;

  database.insert(data);
}
