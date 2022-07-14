const AbstractHello = artifacts.require("AbstractHello");
const InterfaceHello = artifacts.require("InterfaceHello");


module.exports = function(deployer) {
  const age = 4
  const name = 'cait'
  deployer.deploy(AbstractHello, name, age);
  // deployer.deploy(InterfaceHello, age);
}
