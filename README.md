# Ethereum Hackweek
This repo contains examples to work with Ethereum Blockchain & Smart Contracts.

## Basic Smart Contracts
Smart contracts are the .sol files. They can be built with the build.sh script like this:

    $ ./build.sh my_smart_contract.sol

The build file (a JSON file) will be output to the `build/` dir.

## More Basic Setup
Installing Ethereum, Solidity Compiler (solc) and an Ethereum client like Geth is shown in the `install_eth_solidity.sh` script. 

## Running a Client (Geth)
Scripts to boot up both Cleft (to serve keys) and Geth (an Ethereum client) are in the `geth/` dir.
A script to create keys with Cleft is also included. Cleft should be booted up before Geth. Geth needs to connect to Geth.
See the Geth basics link below for full details.

## Links
  - PluralSight's Dec 2018 course "Developing Applications on Ethereum Blockchain" 
  - Geth basics, like creating an account: https://geth.ethereum.org/docs/getting-started 
  - Sepolia Faucet: https://faucet.sepolia.dev/ 
  - Goerli Faucet: https://fauceth.komputing.org/?chain=1115511
