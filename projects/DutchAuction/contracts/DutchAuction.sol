// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Utils.sol";

contract DutchAuction {
  enum AuctionState { Ongoing, Failed, Succeeded, PaidOut }

	using Utils for *;

	string public name;
	uint public unitsAvailable;
	uint public auctionDeadlineSecondsFromEpoch;
	address public beneficiary;
	uint internal reserveAmountInWei;
	AuctionState public auctionState;

	mapping(address => uint) internal bidsByAddress;
	address[] internal bidders;

	modifier isOngoing {
		require(auctionState == AuctionState.Ongoing);
	  _;
	}

	constructor(
	  string memory auctionName,
		uint numUnitsAvailable,
		uint durationInMinutes,
		address beneficiaryAddress,
		uint auctionReserveAmountInWei) {

		name = auctionName;
		unitsAvailable = numUnitsAvailable;
    auctionDeadlineSecondsFromEpoch = durationToSecondsFromEpoch(durationInMinutes);
		beneficiary = beneficiaryAddress;
    reserveAmountInWei = auctionReserveAmountInWei;
		auctionState = AuctionState.Ongoing;
  }

	function durationToSecondsFromEpoch(uint durationInMinutes) private returns(uint) {
	  return currentTime() + Utils.minutesToSeconds(durationInMinutes);
	}

	function currentTime() virtual internal returns(uint) {
	  return block.timestamp;
	}

	function setBidAmount() public payable isOngoing {
		require(isBeforeDeadline(), "Auction deadline has passed!");

	  bidsByAddress[msg.sender] = msg.value;
		addBidderIfMissing(msg.sender);
	}

	function isBeforeDeadline() public returns(bool) {
		return currentTime() < auctionDeadlineSecondsFromEpoch;
	}

	function addBidderIfMissing(address bidder) private {
	  for (uint i = 0; i < bidders.length; i++) {
			if (bidders[i] == bidder) {
				return;
			}
		}

		bidders.push(bidder);
	}
}
