const BakePie = artifacts.require("BakePie");

contract('BakePie', (accounts) => {
  let pie;
  const pie_size = 11;
  const apple_type = 'granny smith';

  beforeEach(async () => {
    pie = await BakePie.new(apple_type, pie_size);
  });

  it('pie should be sour.', async () => {
    await pie.sweetness({from: accounts[0]});

    const flavor = await pie.apple_flavor();
    assert.equal(flavor, 'very sour');
  });

});
