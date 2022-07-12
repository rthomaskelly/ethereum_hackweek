// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import './DutchAuction.sol';

contract TestDutchAuction is DutchAuction {
  uint time;

	constructor(
	  string memory auctionName,
		uint numUnitsAvailable,
		uint durationInMinutes,
		address beneficiaryAddress,
		uint auctionReserveAmountInWei)
		DutchAuction(auctionName,
		             numUnitsAvailable,
								 durationInMinutes,
								 beneficiaryAddress,
								 auctionReserveAmountInWei) {
  }

	function currentTime() override internal view returns(uint) {
	  return time;
	}

	function setCurrentTime(uint newTime) public {
		time = newTime;
	}
}
