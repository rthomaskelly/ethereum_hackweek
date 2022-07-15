const express = require('express')
const Datastore = require('nedb')
const requestIp = require('request-ip')
const smartContracts = require('./ethereum/contract.js')
const app = express();
const web3 = require('./ethereum/web3.js')

app.set('trust proxy', true);

app.listen(3000, () => console.log('Listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

let inboxContract;
let message;

let pieContract;
let orderMessage;
let sweetness;
let servings;

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index', {
    inbox: { message: message },
    pie: { sweetness: sweetness, servings: servings, orderMessage: orderMessage }
  });
});

app.post('/contractAddressSubmit', async (request, response) => {
  console.log("Logging body...");
  console.log(request.body);
  console.log("ip " + request.ip);

  insertRequestIntoDatabase(request);

  const contractAddress = request.body.contractAddress;
  const contractType = request.body.contractType;
  if (contractAddress) {
    if (contractType && contractType === 'Inbox') {
      inboxContract = smartContracts.createInboxContract('0x' + contractAddress)

      message = await inboxContract.methods.message().call();
      console.log(`Read message '${message}'`);

      response.json({ status: 'Success', redirect: '/' });
    } else if (contractType && contractType === 'Pie') {
      pieContract = smartContracts.createPieContract('0x' + contractAddress)

      sweetness = await pieContract.methods.sweetness().call();
      servings = await pieContract.methods.servings().call();
      orderMessage = await pieContract.methods.sentence().call();
      console.log(`Read sweetness '${sweetness}'`);
      console.log(`Read servings '${servings}'`);
      console.log(`Read orderMessage '${orderMessage}'`);

      response.json({ status: 'Success', redirect: '/' });
    }
  }
});

function insertRequestIntoDatabase(request) {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  data.ip = request.ip;

  database.insert(data);
}

app.post('/inboxMessageSubmit', async (request, response) => {
  console.log("Logging body...");
  console.log(request.body);
  console.log("ip " + request.ip);

  // insertRequestIntoDatabase(request);

  const inboxMessage = request.body.inboxMessage;
  if (inboxMessage && inboxContract) {

    const accounts = await web3.web3.eth.getAccounts();
    console.log('Accounts: ' + accounts);
    const account = accounts[0];
    console.log('Account: ' + JSON.stringify(account));
    console.log(`Setting message to ${inboxMessage}`);
    await inboxContract.methods.setMessage(inboxMessage).send({ from: account });

    response.json({ status: 'Success', redirect: '/' });
  }
});

app.post('/orderPie', async (request, response) => {
  console.log("Logging body...");
  console.log(request.body);
  console.log("ip " + request.ip);

  if (pieContract) {
    const accounts = await web3.web3.eth.getAccounts();
    console.log('Accounts: ' + accounts);
    const account = accounts[0];
    console.log('Account: ' + JSON.stringify(account));
    console.log('About to order a pie...');
    const result = await pieContract.methods.orderPie().send({ from: account });
    console.log(JSON.stringify(result));
    orderMessage = await pieContract.methods.sentence().call();

    response.json({ status: 'Success', redirect: '/' });
  }
});
