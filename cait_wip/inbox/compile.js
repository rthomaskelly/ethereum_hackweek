const path = require('path');
const fs = require('fs');
const solc = require('solc');


// doing it this way makes sure it works on windows AND unix based systems
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // dirname is set by node
const source = fs.readFileSync(inboxPath, 'utf8');

var solcInput = {
    language: "Solidity",
    sources: { 
        contract: {
            content: source
        }
     },
    settings: {
        optimizer: {
            enabled: true
        },
        evmVersion: "byzantium",
        outputSelection: {
            "*": {
              "": [
                "legacyAST",
                "ast"
              ],
              "*": [
                "abi",
                "evm.bytecode.object",
                "evm.bytecode.sourceMap",
                "evm.deployedBytecode.object",
                "evm.deployedBytecode.sourceMap",
                "evm.gasEstimates"
              ]
            },
        }
    }
};

solcInput = JSON.stringify(solcInput);
var contractObject = solc.compile(solcInput);
contractObject = JSON.parse(contractObject);
module.exports = contractObject['contracts']['contract']['Inbox']