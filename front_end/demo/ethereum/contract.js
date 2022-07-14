const Web3 = require('./web3.js')
const abi = require('./abi.js')

module.exports.createContract = (contractAddress) => {
  console.log(`Building Contract for address: ${contractAddress}`)
  return new Web3.web3.eth.Contract(abi.contractAbi, contractAddress)
}
