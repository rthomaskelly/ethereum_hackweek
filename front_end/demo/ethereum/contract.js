const Web3 = require('./web3.js')
const inboxAbi = require('./inboxAbi.js')
const pieAbi = require('./pieAbi.js')

module.exports.createInboxContract = (contractAddress) => {
  console.log(`Building Contract for address: ${contractAddress}`)
  return new Web3.web3.eth.Contract(inboxAbi.inboxAbi, contractAddress)
}

module.exports.createPieContract = (contractAddress) => {
  console.log(`Building Contract for address: ${contractAddress}`)
  return new Web3.web3.eth.Contract(pieAbi.pieAbi, contractAddress)
}
