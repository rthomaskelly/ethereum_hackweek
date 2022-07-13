# Ethereum Hackweek
This repo contains examples to work with Ethereum Blockchain & Smart Contracts.

## Containers
This project has incorporated containers to aid development.

`geth` runs in a container because then we don't need to worry about getting `geth` installed on CTC VDIs. See the `geth/` dir.

`truffle` development tools are run out of a container because then we have easy and full control of npm, node and truffle versions. See the `docker/` dir.

`ganache` can also be run out of a container. See the `docker/` dir.

## Development example. Deploy to Goerli.

 1. Build the `truffle-dev` container. In the `docker/` dir run the `./build_truffle_dev.sh` script. If you've already built the container, then don't repeat.
 2. Run `geth`: `cd geth` and run script `./run_geth_example`
 3. `geth` will now be available on default port 8545. Leave it running in that terminal.
 4. In a new terminal, `cd` into your project (ie `projects/Lottery`)
 5. Start the truffle dev container: `sudo podman run -it -v $PWD:/workspace --entrypoint=/bin/bash --network=host truffle-dev` (Find that command in the `docker/` dir also.)
 6. Run `npm install` in the `truffle-dev` container to install necessary javascript dependencies.
 7. Run `truffle migrate --network geth` to deploy to Goerli!

### Slight modification: Deploy to Ganache
Skip steps `2.` and `3.` above. Instead see `docker/build_ganache_dev.sh` for how to build and run Ganache:

    $ sudo podman build --no-cache --format docker --rm -t ganache -f ./ganache/
    $ sudo podman run -it --network=host ganache 

Leave the terminal running like you did with `geth`. Now from within the `truffle-dev` container run: `truffle migrate --network ganache`.

## Links
  - PluralSight's Dec 2018 course "Developing Applications on Ethereum Blockchain" 
  - Geth basics, like creating an account: https://geth.ethereum.org/docs/getting-started 
  - Sepolia Faucet: https://faucet.sepolia.dev/ 
  - Goerli Faucet: https://fauceth.komputing.org/?chain=1115511

# Older info

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
