const Apples = artifacts.require("Apples");
const BakePie = artifacts.require("BakePie");
const PieSize = artifacts.require("PieSize");
const Utils = artifacts.require("Utils");
// const InterfaceHello = artifacts.require("InterfaceHello");

module.exports = function(deployer) {
  // const age = 4
  // const name = 'cait'
  // deployer.deploy(AbstractHello, name, age);
  // deployer.deploy(InterfaceHello, age);
  deployer.deploy(Utils)
  deployer.link(Utils, Apples)
  deployer.link(Utils, BakePie)

  apple_type = 'granny smith';
  deployer.deploy(Apples, apple_type);
  deployer.deploy(BakePie, 'granny smith', 1)
  deployer.deploy(PieSize, 9)

}

