const RefDeployed = artifacts.require("RefDeployed");
// const InterfaceHello = artifacts.require("InterfaceHello");


const Contract = require('web3-eth-contract');

// set provider for all later instances to use
const provider = new HDWalletProvider("55bba976a943f614c77a17912a2222e1bf7e8deac5464c116936bbc65902f0cb", 
            "https://goerli.infura.io/v3/e797a0545734454a9739ba86991de799");

Contract.setProvider(provider);

const address = '0xD98124f23f0a14256d7c3b470E3ce371dAc28384'
const contract = new Contract(jsonInterface, address);

module.exports = function(deployer) {
  // const age = 4
  // const name = 'cait'
  // deployer.deploy(AbstractHello, name, age);
  // deployer.deploy(InterfaceHello, age);
    deployer.deploy(RefDeployed).send()
    console.log(contract.message)


}

