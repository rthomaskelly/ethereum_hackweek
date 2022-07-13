// const Utils = artifacts.require("Utils");
const LotteryContract = artifacts.require("Lottery");
// const TestDutchAuction = artifacts.require("TestDutchAuction");

module.exports = function(deployer) {
  deployer.deploy(LotteryContract);
  // deployer.link(Utils, LotteryContract);
  // deployer.link(Utils, TestDutchAuction);

  const manager = '0x3E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3'
  const players = ['0x9E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3', '0x8E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3']
  deployer.deploy(LotteryContract, 'A new Lottery.', manager, players);
}
