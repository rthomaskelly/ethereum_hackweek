#!/bin/bash

## MacOS should look like this:
# brew tap ethereum/ethereum
# brew install solidity
# brew install ethereum # this probably installs solidity also, gets you some ETH clients

## Linux install
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
sudo apt-get install ethereum # need this for an ETH client like Geth
