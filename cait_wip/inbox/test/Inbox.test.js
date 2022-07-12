const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compile = require('../compile');
const interface = compile.abi;
const bytecode = compile.evm.bytecode.object;

let accounts;
let inbox;
const default_message = 'hey there';

// if youre going to use await then make sure you mark the function as async
beforeEach(async () => {

  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode, arguments: [default_message] })
    .send({ from: accounts[0], gas: '1000000' })

  });


  
describe('Inbox', () => {

  it("deploys a contract", () => {
    assert.ok(inbox.options.address); // this method checks that its a defined value
  });

  it("sets the contract message", async () => {
    await inbox.methods
      .setMessage("new_message")
      .send({ from: accounts[0], gas: "1000000" });
      const message = await inbox.methods.message().call();
      assert.equal(message, 'new_message')
  });

  it('has a default message', async () => { // calling a method is relatively instantaneous but still wait
    const message = await inbox.methods.message().call(); // if you wanted to specify actual tx, put in the call ( )s
    assert.equal(message, default_message)
  });

});
