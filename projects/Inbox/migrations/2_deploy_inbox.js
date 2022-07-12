const Inbox = artifacts.require('Inbox');

module.exports = function(deployer) {
  const defaultMessage = 'Hello!'
  deployer.deploy(Inbox, defaultMessage);
}
