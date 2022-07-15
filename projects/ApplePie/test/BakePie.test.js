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

  it('Ordered two pies - test out of inventory', async () => {
    await pie.orderPie({from: accounts[0]});
    await pie.orderPie({from: accounts[0]});
    const description = await pie.sentence();
    assert.equal(description, 'dangit we dont have the inventory for this!')
    console.log(description);
  });

  it('Ordered one pie - test serving size', async () => {
    await pie.servings({from: accounts[0]});
    const serving_size = await pie.serving_size();
    assert.equal(serving_size, 10)
  });

});
