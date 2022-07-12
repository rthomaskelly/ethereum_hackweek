let TestDutchAuction = artifacts.require('./TestDutchAuction')

contract('DutchAuctionTests', function(accounts) {
	let contract;
	const contractCreator = accounts[0];
	const beneficiary = accounts[1];

	const ONE_ETH = 1000000000000000000;

	beforeEach(async function() {
		contract = await TestDutchAuction.new(
			'TestAuction',
			1,
			10,
			beneficiary,
			0,
			{
				from: contractCreator,
				gas: 2000000
			});

		contract.setCurrentTime(0);
	});

	it('Contracts public fields should be correctly initialized.', async () => {
		const auctionName = await contract.name();
		expect(auctionName).to.equal('TestAuction');

		const unitsAvailable = await contract.unitsAvailable();
		expect(unitsAvailable.toNumber()).to.equal(1);

		const actualBeneficiary = await contract.beneficiary();
		expect(actualBeneficiary).to.equal(beneficiary);

		const state = await contract.auctionState();
		expect(state.valueOf().toNumber()).to.equal(0);
	});

	it('Setting bid after expired deadline should fail.', async () => {
		await contract.setCurrentTime(60001);
		expect(async () => {
			await contract.setBidAmount({ value: ONE_ETH, from: contractCreator })
		}).to.throw();
	});

});
