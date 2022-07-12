# HackWeek 2022
_____________________
## Tools
**Web3.js** [^1.6.0] a tool that allows us to interact with local ethereum nodes. Use to create instances of contracts.

    $ web3.eth.getAccounts()     

**Ganache** [^6.12.1] ganache-cli is a command line tool used to create providers. Providers are customizable blockchain emulators that allow you to interact instantaneously without transactions needing to be mined. Allows you to not run an actual Ethereum node.     

    $ const ganache = require('ganache-cli');  
    $ const Web3 = require('web3');  
    $ const web3 = new Web3(ganache.provider());  

**Wallet** Metamask.io 0x3e4bbf3b61f5d2aab5c9548df91a27097c0630d3  

**Goerli Test Net** Goerli is an Ethereum test network that allows for blockchain development testing before deployment on Mainnet

**Faucet** GoerliFaucet.com Can deposit Goerli ETH (fake ethereum) into our Metamask wallet

**Tester** [^9.2.2] Mocha is a feature-rich JavaScript test framework running on Node.js. It is important to use more recent versions that allow not only async, but also promises

**Solidity** The coding language developed to interact directly with the Ethereum blockchain. solc compiler version is VERY volatile. [^0.8.15]
______

## Compiling

Smart contracts are the .sol files. They can be compiled with the compile.js file found in the inbox/ dir

    $ node compile.js

This compiler uses specific versions of solc, code is based on ^0.8.15. By compiling this specified way as opposed to 'building' we will have source contracts functional on windows and linux machines.
_____________________
## FrameWork
#### Code
**1. Write** contract in Solidity 
**2. Compile** using the solidity compiler in our javascript compile.js
**3. Test** using Mocha testing and web3 Ganache provider
**4. Deploy** to Goerli Test Net via Infura with with web3 Truffle HD wallet provider


