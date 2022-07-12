const Web3 = require('web3');
const compile = require('./compile');
const interface = compile.abi;
const bytecode = compile.evm.bytecode.object;

const HDWalletProvider = require("@truffle/hdwallet-provider");
const provider = new HDWalletProvider("55bba976a943f614c77a17912a2222e1bf7e8deac5464c116936bbc65902f0cb", 
            "https://goerli.infura.io/v3/e797a0545734454a9739ba86991de799");

const web3 = new Web3(provider)

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(interface)
     .deploy({ data:bytecode, arguments:['hey there']})
     .send({ gas: 1000000, from: accounts[0]});

     console.log('Contract deployed to: ', result.options.address);
};

deploy();