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


