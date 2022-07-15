const Web3 = require('web3')

const HDWalletProvider = require('@truffle/hdwallet-provider')
const provider = new HDWalletProvider("55bba976a943f614c77a17912a2222e1bf7e8deac5464c116936bbc65902f0cb", 
            "https://goerli.infura.io/v3/e797a0545734454a9739ba86991de799")

// const provider = new Web3('http://localhost:8545')

const web3 = new Web3(provider)
module.exports.web3 = web3

