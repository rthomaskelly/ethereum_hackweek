let fs = require('fs');
let solc = require('solc')
let Web3 = require('web3')

let contract = compileContract();
let web3 = createWeb3();
let sender = '0xb1cea84c8b7a102828f07d73f9c67dd9592e8fa1';

deployContract(web3, contract, sender)
  .then(function() {
    console.log('Deployment finished!')
  })
  .catch(function(error) {
    console.log(`Failed to deploy contract with error: ${error}`)
  })

function compileContract() {
  const compilerInput = {
    'Voter': fs.readFileSync('simple_voter.sol', 'utf8')
  };

  console.log('Compiling the contract')
  const compiledContract = solc.compile({ sources: compilerInput }, 1);

  let contract = compiledContract.contracts['simple_voter:SimpleVoter'];

  const abi = contract.interface;
  fs.writeFileSync('abi.json', abi);

  return contract;
}

function createWeb3() {
  let web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

  return web3;
}

async function deployContract(web3, contract, sender) {
  let contract = new web3.eth.Contract(JSON.parse(contract.interface));
  const bytecode = '0x' + contract.bytecode;
  const gasEstimate = await web3.eth.estimateGas({ data: bytecode });

  console.log('Deploying the contract...');
  const contractInstance = await contract.deploy({
    data: bytecode
  })
    .send({
      from: sender,
      gas: gasEstimate
    })
    .on('transactionHash', function(transactionHash) {
      console.log(`Transaction hash: ${transactionHash}`);
    })
    .on('confirmation', function(confirmationNumber, receipt) {
      console.log(`Confirmation number: ${confirmationNumber}`);
    })

  console.log(`Contract address: ${contractInstance.options.address}`);
}

