const Utils = artifacts.require("Utils");
const DutchAuction = artifacts.require("DutchAuction");
const TestDutchAuction = artifacts.require("TestDutchAuction");

module.exports = function(deployer) {
  deployer.deploy(Utils);
  deployer.link(Utils, DutchAuction);
  deployer.link(Utils, TestDutchAuction);

  const auctionBeneficiary = '0x3E4Bbf3B61f5D2aab5C9548dF91A27097c0630D3'
  deployer.deploy(DutchAuction, 'A new Dutch Auction.', 1, 10, auctionBeneficiary, 10000);
}
