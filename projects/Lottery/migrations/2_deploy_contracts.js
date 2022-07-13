const LotteryContract = artifacts.require("Lottery");

module.exports = function(deployer) {

  const manager = '0x3E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3'
  const players = ['0x9E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3', '0x8E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3']
  // deployer.deploy(LotteryContract, 'A new Lottery.', manager, players);
  deployer.deploy(LotteryContract, manager);
}
