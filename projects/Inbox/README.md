# Truffle
This Inbox project from `initial_investigation_dnu/` dir has been made `truffle` friendly.

[Truffle is easy to learn.](https://trufflesuite.com/docs/truffle/quickstart/) 

The directory structure and some files were initially generated with:

    $ truffle init # Don't need to run this command again for this project.

## Compile
Compile the Solidity Contracts with:

    $ truffle compile

You may need to check the `solc` version in the `truffle-config.js` file. Grep for `solc` and make sure its on the right version for you.

## Test
Run the project's tests with:

    $ truffle test ./test/Inbox.test.js


## Deploy to Ganache
With a Ganache running we can deploy right to it. The connection info to Ganache is listed in the `truffle-config.js` within the `networks` block. If you need to change the port, do it there.

    $ truffle migrate --network ganache

### Interact with Contract on Ganache
After running the previous `truffle migrate` step you can manually interact with the deployed Contract using `truffle console`:

    $ truffle console  # Launches you into interactive js truffle console.
    truffle(ganache)> let instance = await Inbox.deployed()
    truffle(ganache)> instance.message()
    'Hello!'
    truffle(ganache)> instance.setMessage('Go away!') # Will print JSON info about the transaction.
    truffle(ganache)> instance.message()
    'Go away!'

## Deploy to a Testnet (like Goerli)
The process of deploying to a Testnet is the same as deploying to Ganache. Connect to the testnet with your Ethereum client (eg `geth` or `infura`). Then make sure the `networks` block in the `truffle-config.js` file has the correct information for you to connect.

    #
    # truffle-config.js file, networks block:
    geth: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      gas: 5000000,
      network_id: 5,       // 5 is Goerli
    },

    $ truffle migrate --network geth

