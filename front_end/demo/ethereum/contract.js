const Web3 = require('./web3.js')
const abi = require('./abi.js')

module.exports.createContract = (contractAddress) => {
  console.log('abi!')
  console.log(abi.contractAbi)
  console.log('address!')
  console.log(contractAddress)
  return new Web3.web3.eth.Contract(abi.contractAbi, contractAddress)
}
