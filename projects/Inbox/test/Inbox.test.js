const Inbox = artifacts.require("Inbox");

contract('Inbox', (accounts) => {
  let inbox;
  const default_message = 'hey there';

  beforeEach(async () => {
    inbox = await Inbox.new(default_message);
  });

  it('Contract should have a default message.', async () => {
    const message = await inbox.message();
    assert.equal(message, default_message);
  });

  it("setMessage should change the Contract's message.", async () => {
    await inbox.setMessage('new_message', { from: accounts[0] });
    const message = await inbox.message();
    assert.equal(message, 'new_message');
  });
});
