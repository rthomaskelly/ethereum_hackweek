import { createContract } from './contract'

const contractAddress = '0x'
const contract = createContract(contractAddress)

const field = await contract.methods.field.call()

import { web3 } from './web3'

const accounts = web3.eth.getAccounts()


